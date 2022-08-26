import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { postActivity, getActivities, getAllCountries } from "../../redux/actions";


const validate = (input) => {
    let errors = {};
    if(!input.name) errors.name = 'Name is required'
    if(input.name.length < 3 || input.name.length > 25) errors.name = 'Name must contain between 3 and 50 characters'
    if(!/^[a-zA-Z ]*$/.test(input.name)) errors.name = 'Invalid name: must only contain letters'
    if(input.name !== input.name.toLowerCase()) errors.name = 'Invalid name: Invalid name: must only contain lowercase letters'
    if(!input.difficulty) errors.difficulty = 'Choose a difficulty'
    
    if(!input.duration) errors.duration = 'Duration is required'
    if(input.duration < 30 || input.duration > 300 ) errors.duration = 'Should last at least 30 minutes and no more than 300 minutes'
    if(/^\d+$^\d+$/.test(input.duration)) errors.duration = 'The duration must be in integers'
    
    if(!input.season) errors.season = 'Choose a season'
    
    if(!input.countries.length) errors.countries = 'Select one countrie at least'

    return errors;
}


const CreateActivity = () =>{
    
    const dispatch = useDispatch();
    const countries = useSelector(state => state.allCountries) 
    const history = useHistory();
    
    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
    })
    
    const [errors, setErrors] = useState({})
    
    useEffect(()=>{
        dispatch(getAllCountries())
    },[dispatch]) 

    
    const onHandleChange = (e) => {
        e.preventDefault();        
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })        
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }

    const onHandleDifficulty = (e) => {
        e.preventDefault();
        if(e.target.checked){
            setInput({
                ...input,
                difficulty : e.target.value
            })
        }
        setErrors(validate({
            ...input,
            difficulty : e.target.value
        }))
    }
       

    const onHandleSeason = (e) => {
        e.preventDefault();
        if(e.target.checked){
            setInput({
                ...input,
                season : e.target.value
            })
        }
        setErrors(validate({
            ...input,
            season : e.target.value
        }))        
    }        
    

    const onHandleCountries = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            countries : input.countries.includes(e.target.value)? input.countries : [...input.countries, e.target.value]
        })       
        setErrors(validate({
            ...input,
            countries : [...input.countries, e.target.value]
        }))        
    }

    const onHandleDelete = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            countries: input.countries.filter(c => c !== e.target.value)
        })
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
          }))
        dispatch(postActivity(input))
        setInput({
            name: '',
            difficulty: '',
            duration: '',
            season: '',
            countries: []
        })
        alert('Activity created successfully')
        history.push('/home')        
    }

    useEffect(()=>{
        dispatch(getActivities())
    },[dispatch]) 

    return (
        <>
         <Link to='/home'><button>Go Back</button></Link>
        
        <form onSubmit= {onHandleSubmit}>
            <fieldset>
                <legend>Activity Name</legend>
                <input type='text' autoCapitalize="sentences" name='name' value={input.name} autoFocus onChange={onHandleChange}/>
            {errors.name && (<p>{errors.name}</p>)}
            </fieldset>
           
            <fieldset> 
                <legend>Difficulty Level </legend>          
                <label><input type='radio' id='onedif' name='difficulty' value='1' onChange={onHandleDifficulty}/> 1</label>
                <label><input type='radio' id='twodif' name='difficulty' value='2' onChange={onHandleDifficulty}/> 2</label>
                <label><input type='radio' id='threedif' name='difficulty' value='3' onChange={onHandleDifficulty}/> 3</label>
                <label><input type='radio' id='fourdif' name='difficulty' value='4' onChange={onHandleDifficulty}/> 4</label>
                <label><input type='radio' id='fivedif' name='difficulty' value='5' onChange={onHandleDifficulty}/> 5</label>
                {errors.difficulty && (<p>{errors.difficulty}</p>)}
            </fieldset>
        
            <fieldset>
                <legend>Duration </legend>
                <label><input type='number' name='duration' min='30' max= '300' step={30} value={input.duration} onChange={onHandleChange}/> minutos</label>
                {errors.duration && (<p>{errors.duration}</p>)}
            </fieldset>

            <fieldset>
                <legend>Season </legend>
                <label><input type='radio' id='onesea'name='Summer' value='Summer' onChange={onHandleSeason}/> Summer</label>
                <label><input type='radio' id='twosea' name='Autumn' value='Autumn' onChange={onHandleSeason}/> Autumn</label>
                <label><input type='radio' id='threesea' name='Winter' value='Winter' onChange={onHandleSeason}/> Winter</label>
                <label><input type='radio' id='foursea' name='Spring' value='Winter' onChange={onHandleSeason}/> Spring</label>
                {errors.season && (<p>{errors.season}</p>)}
            </fieldset>

            <fieldset>
            <legend>Countries </legend>
            <select onChange={onHandleCountries}>
                <option hidden selected>Select countries</option>
                {countries?.sort((a,b)=>{
                    if(a.name > b.name) return 1;
                    if(a.name < b.name) return -1;
                    return 0;
                }).map(c => 
                    <option key= {c.id} value= {c.name} >{c.name}</option>)}
            </select>
            {errors.countries && (<p>{errors.countries}</p>)}
            <ul>{input.countries.map(c => 
                <li key={c}>{c}<button value={c} onClick = {onHandleDelete}>x</button></li>)}
            </ul>
            </fieldset>
            
            {!input.name || !input.difficulty || !input.duration || !input.season || input.countries.length === 0 || Object.keys(errors).length ? 
            (<button disabled type="submit">Create Activity</button>) 
            : (<button type="submit">Create Activity</button>)}
                        
        </form>     
        </>
    )

}

export default CreateActivity;
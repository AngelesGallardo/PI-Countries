import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { postActivity, getActivities } from "../../redux/actions";

// const validate = () => {
//     let errors = {};
//     if(!activity.name) {errors.name = 'Name is required'}
//     else if(!activity.difficulty) {errors.difficulty = 'Difficulty is required'}
//     else if(!activity.duration) {errors.duration = 'Duration is required'}
//     else if(!activity.season) {errors.season = 'Season is required'}
//     else if(!activity.countries) {errors.countries = 'Countries is required'}
// }


const CreateActivity = () =>{
    
    const dispatch = useDispatch();
    const history = useHistory();
    const countries = useSelector(state => state.allCountries)
    const [errors, setErrors] = useState('')

    const [activity, setActivity] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
    })

    
    const onHandleChange = (e) => {
        setActivity({
            ...activity,
            [e.target.name] : e.target.value
        })
        // setErrors(validate({
        //     ...activity,
        //     [e.target.name] : e.target.value
        // }))
    }

    const onHandleCheck = (e) => {
        e.preventDefault();
        if(e.target.checked)
        setActivity({
            ...activity,
            difficulty : e.target.value
        })
    }

    const onHandleSeason = (e) => {
        e.preventDefault();
        if(e.target.checked)
        setActivity({
            ...activity,
            season : e.target.value
        })
    }

    const onHandleSelect = (e) => {
        e.preventDefault();
        setActivity({
            ...activity,
            countries : [...activity.countries, e.target.value]
        })
    }

    const onHandleDelete = (e) => {
        e.preventDefault();
        setActivity({
            ...activity,
            countries: activity.countries.filter(c => c !== e.target.value)
        })
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();
        dispatch(postActivity(activity))
        setActivity({
            name: '',
            difficulty: '',
            duration: '',
            season: '',
            countries: []
        })
        alert('activity created successfully')
        history.push('/home')

    }

    useEffect(()=>{
        dispatch(getActivities())
    },[dispatch])
    

    return (
        <>
         <Link to='/home'><button>{'<<'}</button></Link>
        
        <form>
            <div>
                <label>Activity </label>
                <input type='text' name='name' value={activity.name} onChange={onHandleChange}/>
                {errors.name && (
                    <p>{errors.name}</p>
                )}
            </div>
            <div> 
                <label>Difficulty </label>          
                <label><input type='checkbox' name='1' value='1' onChange={onHandleCheck}/> 1</label>
                <label><input type='checkbox' name='2' value='2' onChange={onHandleCheck}/> 2</label>
                <label><input type='checkbox' name='3' value='3' onChange={onHandleCheck}/> 3</label>
                <label><input type='checkbox' name='4' value='4' onChange={onHandleCheck}/> 4</label>
                <label><input type='checkbox' name='5' value='5' onChange={onHandleCheck}/> 5</label>
            </div> 
            <div>
                <label>Duration </label>
                <label><input type='number' name='duration' value={activity.duration} onChange={onHandleChange}/> minutos</label>
            </div>
            <div>
                <label>Season </label>
                <label><input type='checkbox' name='Summer' value='Summer' onChange={onHandleSeason}/> Summer</label>
                <label><input type='checkbox' name='Autumn' value='Autumn' onChange={onHandleSeason}/> Autumn</label>
                <label><input type='checkbox' name='Winter' value='Winter' onChange={onHandleSeason}/> Winter</label>
                <label><input type='checkbox' name='Spring' value='Winter' onChange={onHandleSeason}/> Spring</label>
            </div>
            <div>
            <label>Countries </label>
            <select onChange={onHandleSelect}>
                {countries.map(c => 
                    <option value= {c.name} >{c.name}</option>)}
            </select>
            <ul>{activity.countries.map(c => 
                <li>{c}<button value={c} onClick = {onHandleDelete}>x</button></li>)}
            </ul>
            
            </div>
            <button type='submit' onClick= {onHandleSubmit}>Activity Create</button>
        </form>     
        </>
    )

}

export default CreateActivity;
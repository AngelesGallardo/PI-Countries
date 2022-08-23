import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { getActivities, postActivity } from "../../redux/actions";

const CreateActivity = () =>{
    
    const dispatch = useDispatch();
    const history = useHistory();
    const activities = useSelector(state => state.activities)
    const countries = useSelector(state => state.countries)

    const [activity, setActivity] = useState({
        name:'',
        difficulty: 1,
        duration: 0,
        season:'',
        countries: []
    })

    useEffect(()=>{
        dispatch(getActivities())
    },[dispatch])

    const onHandleChange = (e) => {
        setActivity({
            ...activities,
            [e.target.name] : e.target.value
        })
    }

    const onHandleCheck = (e) => {
        e.preventDefault();
        if(e.target.checked)
        setActivity({
            ...activities,
            [e.target.name] : e.target.value
        })
    }

    const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(postActivity(activity))
    setActivity({
        name:'',
        difficulty: 1,
        duration: 0,
        season:'',
        countries: []
    })
    history.push('/home')
    }


    return (
        <>
         <Link to='/home'><button>{'<<'}</button></Link>
        
        <form>
            <div>
                <label>Activity </label>
                <input type='text' name='name' value={activity.name} onChange={onHandleChange}/>
            </div>
            <div> 
                <label>Difficulty </label>          
                <label><input type='checkbox' name='uno' value={activity.uno}/> 1</label>
                <label><input type='checkbox' name='dos' value={activity.dos}/> 2</label>
                <label><input type='checkbox' name='tres' value={activity.tres}/> 3</label>
                <label><input type='checkbox' name='cuatro' value={activity.cuatro}/> 4</label>
                <label><input type='checkbox' name='cinco' value={activity.cinco}/> 5</label>
            </div> 
            <div>
                <label>Duration </label>
                <label><input type='number' name='duration' value={activity.duration} onChange={onHandleChange}/> minutos</label>
            </div>
            <div>
                <label>Season </label>
                <label><input type='checkbox' name='summer' value={activity.summer}/> Summer</label>
                <label><input type='checkbox' name='autumn' value={activity.autumn}/> Autumn</label>
                <label><input type='checkbox' name='winter' value={activity.winter}/> Winter</label>
                <label><input type='checkbox' name='spring' value={activity.spring}/> Spring</label>
            </div>
            <div>
            <label>Countries </label>
            <select>
                {countries.map(c => 
                    <option>{c.name}</option>)}
            </select>
            </div>
            <button type='submit' onClick= {onHandleSubmit}>Activity Create</button>
        </form>     
        </>
    )

}

export default CreateActivity;
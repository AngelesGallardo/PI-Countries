import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { postActivity } from "../../redux/actions";




const CreateActivity = () =>{

const [activity, setActivity] = useState({
    Nombre:'',
    Dificultad:'1',
    Duracion:'',
    Temporada:''
})

const dispatch = useDispatch();

const onHandleChange = (e) => {
    setActivity({
        ...activity,
        [e.target.name] : e.target.value
    })
}

const onHandleSubmit = (e) => {
   e.preventDefault();
   dispatch(postActivity(activity))
}


    return (
        <form onSubmit={onHandleSubmit}>
            <label>Actividad:</label>
            <input type='text' name='actividad' value={activity.actividad} onChange={onHandleChange}></input>
            <label>Duracion:</label>
            <label>Dificultad:</label>
            <label>Temporada:</label>
            <label>Pais:</label>
            <button type='submit'>Crear Actividad</button>
        </form>

    )

}

export default CreateActivity;
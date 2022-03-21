import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const CreateExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const history = useHistory();

    const createExercise = async () => {
        const newExercise = { name, reps, weight, unit, date }
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the exercise!");
        } else {
            alert(`Failed to add a row, due to missing input (status code = ${response.status}).`);
        }
        history.push("/");
    };

    return (
        <div id='create-div'>
            <h1>Create Exercise</h1>
            <input
                className='create-form'
                required="true"
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                className='create-form'
                required="true"
                type="number"
                value={reps}
                placeholder="# of Reps"
                onChange={e => setReps(e.target.value)} />
            <input
                className='create-form'
                required="true"
                type="number"
                placeholder="Weight"
                value={weight}
                onChange={e => setWeight(e.target.value)}/>
            <select className='create-form' id="select-unit" required="true" default='lbs' value={unit} onChange={e => setUnit(e.target.value)}>
                <option value="n/a">Units</option>
                <option value="lbs">lbs</option>
                <option value="kgs" >kgs</option>
            </select>
            <input
                className='edit-form'
                required="true"
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)} />
            {/* Note to self: it is IMPOSSIBLE to change date format?!
                https://stackoverflow.com/questions/7372038/is-there-any-way-to-change-input-type-date-format */}
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={createExercise}
            >Create</button>
        </div>
    );
}

export default CreateExercisePage;



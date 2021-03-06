import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditExercisePage = ({ exerciseToEdit }) => {

    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const history = useHistory();

    const editExercise = async () => {
        const editedExercise = { name, reps, weight, unit, date }
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Successfully edited the exercise!");
        } else {
            alert(`Failed to edit the exercise, due to missing input (status code = ${response.status}).`);
        }
        history.push("/");
    };

    return (
        <div id='edit-div'>
            <h1>Edit Exercise</h1>
            <input
                className='edit-form'
                type="text"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                className='edit-form'
                type="number"
                value={reps}
                onChange={e => setReps(e.target.value)} />
            <input
                className='edit-form'
                type="number"
                value={weight}
                onChange={e => setWeight(e.target.value)} />
            <select id="select-unit" default='lbs' value={unit} onChange={e => setUnit(e.target.value)}>
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
            <button
                onClick={editExercise}
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Save</button>
        </div>
    );

}

export default EditExercisePage;
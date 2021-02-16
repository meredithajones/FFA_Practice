import React, { useState } from 'react'

function inventory(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    };

const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit ({
        id: Math.floor(Math.random() * 1000),
        text: input
    }); 

setInput ('');
};

    
    return (
        <form className= "input-form" onSubmit= {handleSubmit}>
            <input 
            type="text" 
            placeholder="Add something to the fridge" 
            value={input} 
            name= "text" 
            className= "inventory-input"
            onChange ={handleChange}
            />
            <button className= "inventory-button">Add</button>
        </form>
        
   
    );
}

export default inventory


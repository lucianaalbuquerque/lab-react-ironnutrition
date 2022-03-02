import React, { useState } from 'react';
import { Divider, Input } from 'antd';

function AddFoodForm(props) {
    // declaring useState and this variables first time here:
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleImageInput = (e) => { setImage(e.target.value) };
    const handleNameInput = (e) => { setName(e.target.value) };
    const handleCaloriesInput = (e) => { setCalories(e.target.value) };
    const handleServingsInput = (e) => { setServings(e.target.value) };

    const handleSubmit = (event) => {
        //1. cancel the automatic reload of the page
        event.preventDefault() 

        //2. creating a new food with the current states for image, name, ...
        const random = Math.random() * 1000000;
        const newFood = {id:random, image, name, calories, servings};

        //3. passing newFood to the app.js
        props.addFood(newFood)
        //4. setting the input to default after submitting
        setImage('');
        setName('')
        setCalories(0);
        setServings(0);
    }

  return (
    <div>
    <Divider>Add Food Entry</Divider>

    <form className='foodForm' onSubmit={handleSubmit}>

        <label>Image</label>
        <Input value={image} type="text" onChange={handleImageInput} />

        <label>Name</label>
        <Input value={name} type="text" onChange={handleNameInput} />

        <label>Calories</label>
        <Input value={calories} type="number" onChange={handleCaloriesInput} />

        <label>Servings</label>
        <Input value={servings} type="number" onChange={handleServingsInput} />

        <button type="submit">Create</button>

    </form>
    </div>
  )
}

export default AddFoodForm
import './App.css';
import { Row, Divider, Button } from 'antd';
import React, {useState} from 'react';
import foodData from './foods.json';
import FoodBox from './Components/FoodBox/FoodBox';
import AddFoodForm from './Components/AddFoodForm/AddFoodForm';
import SearchFood from './Components/SearchFood/SearchFood';

function App() {
  const [foodList, setFoodList] = useState(foodData);
  const [foodDisplay, setFoodDisplay] = useState(foodList);
  const [showForm, setFShowForm] = useState(false);

  const addFoodToList = (newFood) => {
    const updatedFoodList = [...foodList, newFood];
    setFoodList(updatedFoodList);
    setFoodDisplay(updatedFoodList)
  };

  const searchFood = (searchQuery) => {
    let filteredList = foodList.filter((food) =>
      food.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    setFoodDisplay(filteredList)
  }

  const deleteFood = (foodId) => {
    const updatedList = foodList.filter((food) => { return foodId !== food.id} )
    console.log(updatedList)

    setFoodList(updatedList)
    setFoodDisplay(updatedList)
  }

  const toggleShow = () => {
    setFShowForm(!showForm)
  }

  return (
    <div className="App">
      <h2>Iron Nutrition Foods</h2>
      
      { showForm && <AddFoodForm addFood={addFoodToList} /> }
      <Button onClick={toggleShow}> {showForm ? 'Hide Form' : 'Add Food'} </Button>

      <SearchFood search={searchFood} />
    
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {foodDisplay.map((food, index) => {
        return (<FoodBox key={index} id={index} food={food} delete={deleteFood} />);
      })}
      </Row>
      { (foodDisplay.length === 0) && 
      <div>
      <p>Ops there's no more content to show</p>
      <img src="" alt="" /> 
      </div>}
      

    </div>
  );
}

export default App;

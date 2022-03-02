import React from 'react';
import { Card, Col, Button } from 'antd';

function FoodBox(props) {
  const { food } = props;
  food.id = props.id;

  return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>{food.calories}</p>
        <p>{food.servings}</p>
        <p>
          <b>Total Calories: {Number(food.calories) * Number(food.servings)} </b> kcal
        </p>
        <Button type="primary" onClick={() => props.delete(food.id)} > Delete </Button>
      </Card>
    </Col>
  )
}

export default FoodBox
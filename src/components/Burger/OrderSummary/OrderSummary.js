import React from 'react';
import Aux from '../../../hoc/Aux1';
import Button from '../../UI/Button/Button';

const orderSummary = (props) =>{
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey=>{
      return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
    });
  return(
    <Aux>
      <h3>Your Order</h3>
      <p>A Delicious Burger with following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Order</p>
      <Button btnType='Danger' clicked={props.cancelled}>CANCEl</Button>
      <Button btnType='Success' clicked={props.continued}>CONTINUE</Button>
    </Aux>
  );
};

export default orderSummary;

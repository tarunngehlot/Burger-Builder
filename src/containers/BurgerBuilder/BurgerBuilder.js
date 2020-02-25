import React, {Component} from 'react';
import Aux from '../../hoc/Aux1';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad:0.5,
  cheese: 0.4,
  meat:0.9,
  bacon:1.5
};

class BurgerBuilder extends Component{
  state = {
    ingredients : {
      cheese:0,
      bacon:0,
      meat:0,
      salad:0
    },
    totalPrice:4,
    purchasable:false,
    purchasing: false
  }

  updatePurchasable = (newPrice) =>{
    if(newPrice == 4){
      return this.setState({purchasable:false});
    }
    else{
      return this.setState({purchasable:true});
    }
  }

  updatePurchasing = () =>{
    if(this.state.purchasing){
      this.setState({purchasing:false});
    }
    else{
      this.setState({purchasing:true});
    }
  }

  orderContinued = () => {
    alert('YOU CONTINUED!');
  }

  addIngredientHandler = (type) => {
    const updatedCount = this.state.ingredients[type] +1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
    this.updatePurchasable(newPrice);
  }

  removeIngredientHandler = (type) => {
    if(this.state.ingredients[type]<=0)
    {
      return;
    }
    const updatedCount = this.state.ingredients[type] -1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
    this.updatePurchasable(newPrice);
  }

  render(){
    const disabledInfo = {
      ...this.state.ingredients
    };
    for(let key in disabledInfo)
    {
      disabledInfo[key] = disabledInfo[key] <=0;
    }
    return(
      <Aux>
        <Modal show={this.state.purchasing} cancel={this.updatePurchasing}>
          <OrderSummary
              continued={this.orderContinued}
              cancelled={this.updatePurchasing}
              price={this.state.totalPrice}
              ingredients={this.state.ingredients}/>
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          ordered={this.updatePurchasing}
          price={this.state.totalPrice}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;

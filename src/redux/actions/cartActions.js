import {ADD_PIZZA} from "../reducers/cartReducers";

export const addPizzaToCart = pizzaObj => ({type: ADD_PIZZA, payload: pizzaObj});
import axios from "axios";
import {SET_PIZZAS, SET_IS_LOADED} from "../reducers/pizzasReducers";

export const setPizzas = (items) => ({type: SET_PIZZAS, payload: items});
export const setIsLoaded = (value) => ({type: SET_IS_LOADED, payload: value});

export const getPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setIsLoaded(false));
    axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then(({data}) => {
            dispatch(setPizzas(data));
            dispatch(setIsLoaded(true));
        })
}

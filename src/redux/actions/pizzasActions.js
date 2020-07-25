import axios from "axios";

export const setPizzas = (items) => ({type: 'SET_PIZZAS', payload: items});
export const setIsLoaded = (value) => ({type: 'SET_IS_LOADED', payload: value});

export const getPizzas = () => (dispatch) => {
    dispatch(setIsLoaded(true));
    axios.get('http://localhost:3001/pizzas')
        .then(({data}) => {
            dispatch(setPizzas(data));
            dispatch(setIsLoaded(false));
        })
}

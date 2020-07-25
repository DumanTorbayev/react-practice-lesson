import {combineReducers} from "redux";
import filters from "./filtersReducer";
import pizzas from "./pizzasReducers";

const rootReducer = combineReducers({
    filters: filters,
    pizzas: pizzas
})

export default rootReducer;
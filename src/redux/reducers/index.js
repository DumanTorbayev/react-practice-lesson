import {combineReducers} from "redux";
import filters from "./filtersReducer";
import pizzas from "./pizzasReducers";
import cart from "./cartReducers";

const rootReducer = combineReducers({filters, pizzas, cart})

export default rootReducer;
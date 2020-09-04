import {SET_CATEGORY, SET_SORT_BY} from "../reducers/filtersReducer";

export const setSortBy = ({type, order}) => ({type: SET_SORT_BY, payload: {type, order}});
export const setCategory = (index) => ({type: SET_CATEGORY, payload: index});

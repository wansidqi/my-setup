import { combineReducers } from "redux";
import { counterReducer } from "../Reducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
})
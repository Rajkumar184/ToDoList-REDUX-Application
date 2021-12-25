import { combineReducers } from "redux";
import Todos from "./Todos";
const reducers = combineReducers({
	rootReducers: Todos,
});

export default reducers;

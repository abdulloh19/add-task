import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import todoReducer from "./reducers/TodoReducer";


export default createStore(todoReducer,  applyMiddleware(logger));

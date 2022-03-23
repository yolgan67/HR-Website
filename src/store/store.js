import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "../reducers/userReducer";
import thunk from "redux-thunk";
import logger from "redux-logger"
import promise from "redux-promise-middleware"


const rootReducer =combineReducers({userReducer})
const extensions = applyMiddleware(thunk,promise,logger)
const myStore =createStore(rootReducer,extensions)
export default myStore
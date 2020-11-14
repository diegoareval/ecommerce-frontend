import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import rootReducer from "../reducer/rootReducer"
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {}
const middlewares = [thunk]

let store

  const devTools =process.env.NODE_ENV === "production"
    ? applyMiddleware(...middlewares)
    : composeWithDevTools(applyMiddleware(...middlewares));

  store = createStore(rootReducer, initialState, devTools)

export default store


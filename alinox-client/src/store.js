import thunk from "redux-thunk";
import logger from "redux-logger";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";

const middleware = [ thunk ];

if (process.env.NODE_ENV !== "production") {
	middleware.push(logger);
}

const enhancers = [ applyMiddleware(...middleware) ];

export default createStore(rootReducer, compose(...enhancers));
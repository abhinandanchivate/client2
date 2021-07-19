//createStore(rootreducer, state , middleware spec)
// rootReducer : will hold all reducer spec.

// state: {}
// middleware spec: thunk : composewithdevtool
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

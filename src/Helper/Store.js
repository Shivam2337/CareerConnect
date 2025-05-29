import { applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';


const rootReducer = combineReducers ({
})

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
const store = configureStore ({
    reducer : rootReducer,
     composedEnhancer});
export default store;
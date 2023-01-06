import categoriesReducer from "./categoriesReducer";
import booksReducer from "./booksReducer";

import{createStore,combineReducers}from"redux"

const rootReducer=combineReducers({
    categoriesState: categoriesReducer,
    booksState:booksReducer,
});

const store=createStore(rootReducer);

export default store;
import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./Profile-reducer.ts";
import dialogsReducer from "./Dialogs-reducer.ts";
import sidebarReducer from "./Sidebar-reducer.ts";
import usersReducer from "./Users-reducer.ts";
import authReducer from "./Auth-reducer.ts";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import appReducer from "./reducers/app-reducer.ts";

let reducers = combineReducers({
    profilePage: profileReducer, 
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

type RootReducersType = typeof reducers
export type AppStateType = ReturnType<>

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
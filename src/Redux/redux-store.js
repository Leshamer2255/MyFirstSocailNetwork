import { combineReducers, createStore } from "redux";
import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./Auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer, 
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

export default store;
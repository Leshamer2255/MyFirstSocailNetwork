import { combineReducers, createStore } from "redux";
import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer, 
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;
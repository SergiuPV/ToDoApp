import { combineReducers } from 'redux';
import ToDoReducer from './ToDo/ToDoReducer';

const rootReducer = combineReducers({
    ToDoReducer,
});

export default rootReducer;
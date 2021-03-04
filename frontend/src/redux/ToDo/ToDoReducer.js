import { GET_TODO, GET_TODO_SUCCESS, GET_TODO_FAILURE } from './ToDoTypes';
import { TODO_POST, TODO_POST_SUCCESS, TODO_POST_FAILURE } from './ToDoTypes';

const initialState = {
    ToDo: {},
    error: '',
};

const ToDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO: return {
            ...state,
            ToDo: { success: 1, loaded: false },
        };
        case GET_TODO_SUCCESS: return {
            ...state,
            ToDo: { todos: action.payload, loaded: true },
            error: '',
        };
        case GET_TODO_FAILURE: return {
            ...state,
            ToDo: {},
            error: { todos: action.payload, loaded: false },
        };
        case TODO_POST: return {
            ...state,
            ToDo: { success: 1 },
        }
        case TODO_POST_SUCCESS: return {
            ...state,
            ToDo: action.payload,
            error: '',
        }
        case TODO_POST_FAILURE: return {
            ...state,
            ToDo: {},
            error: action.payload,
        }
        default: return state;
    }
};

export default ToDoReducer;
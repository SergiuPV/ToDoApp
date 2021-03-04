import MyApi from '../../services/MyApi';

import { GET_TODO, GET_TODO_SUCCESS, GET_TODO_FAILURE } from './ToDoTypes';
import { TODO_POST, TODO_POST_SUCCESS, TODO_POST_FAILURE } from './ToDoTypes';

export const getToDo = ()  => {
    return {
        type: GET_TODO,
    };
};

export const getToDoSuccess = todo  => {
    return {
        type: GET_TODO_SUCCESS,
        payload: todo,
    };
};

export const getToDoFailure = error  => {
    return {
        type: GET_TODO_FAILURE,
        payload: error,
    };
};

export const postToDo = ()  => {
    return {
        type: TODO_POST,
    };
};

export const postToDoSuccess = ToDo  => {
    return {
        type: TODO_POST_SUCCESS,
        payload: ToDo,
    };
};

export const postToDoFailure = error  => {
    return {
        type: TODO_POST_FAILURE,
        payload: error,
    };
};

export const getToDoRequest = (id) => {
    return (dispatch) => {
        dispatch(getToDo())
        MyApi.getToDo(String(id))
            .then(response => {
                const ToDo = response.data
                dispatch(getToDoSuccess(ToDo))
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(getToDoFailure(errorMessage))
            })
    };
};

export const postToDoRequest = (id, todo) => {
    return (dispatch) => {
        dispatch(postToDo())
        MyApi.postToDo(String(id), {likes})
            .then(response => {
                if ( response.status === 200 ) {
                    const ToDo  = { id: String(id), todo: String(todo) }
                    dispatch(postPostSuccess(ToDo))
                }
            }).catch(error => {
                const errorMessage = error.message
                dispatch(postPostFailure(errorMessage))
            })
    };  
};
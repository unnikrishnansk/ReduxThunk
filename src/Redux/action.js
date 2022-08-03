import * as types from './actionTypes';

const gettodorequest = () => {
    return {
        type : types.GET_TODOS_REQUEST
    }
}

const gettodosuccess = (payload) => {
    return {
        type : types.GET_TODOS_SUCCESS,
        payload
    }
}

const gettodofailure = () => {
    return {
        type : types.GET_TODOS_FAILURE
    }
}

const addtodorequest = () => {
    return {
        type : types.ADD_TODOS_REQUEST
    }
}

const addtodosuccess = (payload) => {
    return {
        type : types.ADD_TODOS_SUCCESS,
        payload
    }
}

const addtodofailure = () => {
    return {
        type : types.ADD_TODOS_FAILURE
    }
}

export {
    gettodorequest,
    gettodosuccess,
    gettodofailure,
    addtodorequest,
    addtodosuccess,
    addtodofailure,
}
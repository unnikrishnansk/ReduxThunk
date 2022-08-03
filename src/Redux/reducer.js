import * as types from './actionTypes';

const initialstate = {
    task : [],
    isLoading : false,
    isError : false,
}

const reducer = (oldstate = initialstate,action) =>
{
    const {type,payload} = action;
    switch(type)
    {
        case types.GET_TODOS_REQUEST :
            {
                return {
                    ...oldstate,
                    isLoading : true,
                    isError : false,
                }
            }

            case types.GET_TODOS_SUCCESS :
                {
                    return {
                        ...oldstate,
                        isLoading : true,
                        isError : false,
                        task : [...payload],
                    }
                }

                case types.GET_TODOS_FAILURE :
                    {
                        return {
                            ...oldstate,
                            isLoading : false,
                            isError : true,
                        }
                    }
        default:
            return oldstate;
    }
}

export {reducer};
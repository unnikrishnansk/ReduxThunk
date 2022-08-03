import axios from 'axios';
import React,{useEffect} from 'react'
import Todoinput from './Todoinput';
import { useDispatch , useSelector } from 'react-redux';
import { gettodofailure, gettodorequest, gettodosuccess } from '../Redux/action';

const Todo = () => {

    const dispatch = useDispatch();
    const taskdata = useSelector((store)=>store.task);

    const gettask = () => {
        dispatch(gettodorequest());
        axios
        .get("http://localhost:8081/todos")
        .then((r)=> dispatch(gettodosuccess(r.data)))
        .catch((err) => dispatch(gettodofailure(err)))
    }

    useEffect(() => {
        gettask();
    }, [])

    console.log(taskdata);

  return (
    <div>
        <h3>Todo</h3>
        <Todoinput gettask={gettask}/>

        {taskdata.map((elem) => {
            return <div>{elem.title}</div>
        })}
    </div>
  )
}

export default Todo;
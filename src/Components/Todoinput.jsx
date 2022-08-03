import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import { addtodofailure, addtodorequest, addtodosuccess } from '../Redux/action';
import axios from 'axios';

const Todoinput = ({gettask}) => {
    const [currenttask, setcurrenttask] = useState("");

    const dispatch = useDispatch();

    const addtask = () => {
        if(currenttask){
            const payload = {
                title: currenttask,
                status : false, 
            }
            dispatch(addtodorequest())
            axios.post(" http://localhost:8081/todos",payload)
            .then((r) => {
                dispatch(addtodosuccess(r.data))
            })
            .then(() => gettask())
            .catch((err)=>{
                dispatch(addtodofailure(err))
            })
        }
    }

  return (
    <div>
        <input type="text" value={currenttask} onChange={(e) => setcurrenttask(e.target.value)}/>
        <button onClick={addtask}>add</button>
    </div>
  )
}

export default Todoinput;
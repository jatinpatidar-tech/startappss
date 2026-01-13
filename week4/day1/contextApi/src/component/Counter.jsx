import React, {  use, useContext, useEffect } from 'react'
import { MyContext } from '../App.jsx'; 
import '../App.css'
const Counter = () => {
    const {count, setcount}=useContext(MyContext);
    useEffect(() => {
      
        setcount(localStorage.getItem("count") ? parseInt(localStorage.getItem("count")) : 0);
        
      }, []);

      useEffect(() => {
        localStorage.setItem("count", count);
      }, [count]);
  return (
    <div>
      <h1>Count : {count}</h1>
       <h1  className="button" onClick={()=>{  setcount(count+1) }}>increment</h1>
       <h1 className="button" onClick={()=>{  setcount(count-1) }}>decrement</h1>
       <h1 className="button" onClick={()=>{ setcount(0) }}>reset</h1>
   
    </div>
  )
}
export default Counter

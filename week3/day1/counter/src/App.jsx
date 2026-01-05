import { useState } from "react"

 
function App(){
  const [count,setCounter]=useState(0)
   function handleClick(){
      setCounter(count+1);
      
   }
   function handleClick(){
     if(count==0){
       console.alert("Counter cannot be negative");
       return ;
     }
      setCounter(count-1);

   }
  return (
    <div>
        <h1 >{count}</h1>
         <h1 onClick={handleClick}>increment</h1>
         <h1 onClick={handleClick}>decrement</h1>
    </div>
  )
}
export default App;
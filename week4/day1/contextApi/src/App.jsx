import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';
import Counter from './component/Counter.jsx';
const MyContext = createContext();
const App = () => {
  const [count ,setcount] = useState(0);

  return (
    <div>
         <MyContext.Provider value={{ count, setcount }}>
         <Counter/>
         </MyContext.Provider>
    </div>
  )
}

export default App
export {MyContext};
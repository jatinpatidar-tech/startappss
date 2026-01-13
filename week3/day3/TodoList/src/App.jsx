import React, { useState } from 'react'
import './App.css'
import {  useForm } from 'react-hook-form';
import dummyData from './data.js';
import List from './components/List.jsx';
const App = () => {

  const [data, setdata] = useState(dummyData)
  const { register, handleSubmit,  reset , formState: { errors }} = useForm();

  const Submit = (input) => {
    
    setdata([...data, {
      id: Date.now(),
      taskName: input.text,
      status: "pending",
      date: input.date
    }]);

    reset();

  };


  return (
    <div>
      <div className="todo-app">


        <form onSubmit={handleSubmit(Submit)}>

          <label htmlFor="text">Enter your Task</label>
          <input
            id="text"
            {...register("text", {
              required: "Task is required",
              minLength: { value: 3, message: "Task must be at least 3 characters" }
            })}
            placeholder="Enter your task"
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
          {errors.text && <p style={{ color: "red" }}>{errors.text.message}</p>}

     
          <label htmlFor="date">Enter Date</label>
          <input
            id="date"
            type="date"
            {...register("date", {
              required: "Date is required",
              pattern: {

                value: /^\d{4}-\d{2}-\d{2}$/,
                message: "Date must be in YYYY-MM-DD format"
              }
            })}

          />
          {errors.date && <p style={{ color: "red" }}>{errors.date.message}</p>}

          <button type="submit">
            Submit
          </button>
        </form>

        <List dummyData={data} setdata={setdata} />

      </div>

    </div>

  )
}

export default App


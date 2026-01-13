import React from 'react';

const List = ({ dummyData, setdata }) => {


    const pendingTasks = dummyData.filter(item => item.status === "pending");
    const completedTasks = dummyData.filter(item => item.status === "completed");

    function handleUpdate(e) {
        console.log("Checkbox clicked", e);
        let li = e.target.parentNode;
        let id = li.querySelector("#id").innerText;
        console.log("Date", id);
        let updatedData = dummyData.filter(item => (item.id == id ? item.status = "completed" : item.status));
        setdata([...updatedData]);
    }
   

    function handelDelete(e) {
      
        let li = e.target.parentNode;
        let id = li.querySelector("#id").innerText;
        // console.log("Date", id);
        console.log("id to be deleted", id);
        let updatedData = dummyData.filter(item => item.id != id);
        setdata([...updatedData]);
          
    }

    return (
        <div>

            <div className="task-section pending">
                <h2>Pending Tasks</h2>
                {pendingTasks.length === 0 ? (<p>No pending tasks</p>) : (
                    <ul>
                        {pendingTasks.map((item, index) => (
                            <li key={index}>
                                <strong>{item.taskName}</strong> <br />
                                <span id="id" style={{ display: "none" }}>{item.id}</span>

                                <h4  >   Date: {item.date}</h4>
                                <input type="checkbox" onClick={handleUpdate} />
                                <button  id="delete" onClick={handelDelete}>delete</button>
                            </li>

                        ))}
                    </ul>
                )}
            </div>


            <div className="task-section completed">
                <h2>Completed Tasks</h2>
                {completedTasks.length === 0 ? (<p>No completed tasks</p>) : (
                    <ul >
                        {completedTasks.map((item, index) => (
                            <li key={index}>
                                <strong>{item.taskName}</strong> <br />
                                <span id="id" style={{ display: "none" }}>{item.id}</span>
                             
                                <h4>Date: {item.date}</h4>
                                <button id="delete" onClick={handelDelete}>delete</button>
                            </li>

                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default List;

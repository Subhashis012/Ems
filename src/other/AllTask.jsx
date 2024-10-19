import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1C1C1C] p-4 rounded mt-5">
        <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between">
            <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
            <h3 className="text-lg font-medium w-1/5">New Task</h3>
            <h5 className="text-lg font-medium w-1/5">Active Task</h5>
            <h5 className="text-lg font-medium w-1/5">Completed</h5>
            <h5 className="text-lg font-medium w-1/5">Failed</h5>
          </div>
      <div>
      {userData.map((elem,idx) => {
        const newTasks = elem.taskCounts?.newTask || 0;
        const activeTasks = elem.taskCounts?.active || 0;
        return (
          <div key={idx} className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between">
            <h2 className="text-lg font-medium w-1/5 ">{elem.firstName}</h2>
            <h3 className="text-lg font-medium w-1/5 text-blue-600">{newTasks}</h3>
            <h5 className="text-lg font-medium w-1/5 text-yellow-400">{activeTasks}</h5>
            <h5 className="text-lg font-medium w-1/5 text-white">{elem.taskCounts?.completed || 0}</h5>
            <h5 className="text-lg font-medium w-1/5 text-red-600">{elem.taskCounts?.failed || 0}</h5>
          </div>
        );
      })}
      </div>
      </div>
  );
};

export default AllTask;

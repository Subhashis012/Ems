import React from 'react';

const TaskListNumbers = (props) => {
  // Use optional chaining to safely access taskNumbers
  const taskNumbers = props.data?.taskCounts || { newTask: 0, completed: 0, active: 0, failed: 0 };

  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='h-40 w-[45%] bg-red-400 py-6 px-9 rounded-xl'>
        <h2 className='text-3xl'>{taskNumbers.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className='h-40 w-[45%] bg-blue-400 py-6 px-9 rounded-xl'>
        <h2 className='text-3xl'>{taskNumbers.completed}</h2>
        <h3 className='text-xl font-medium'>Completed</h3>
      </div>

      <div className='h-40 w-[45%] bg-green-400 py-6 px-9 rounded-xl'>
        <h2 className='text-3xl'>{taskNumbers.active}</h2>
        <h3 className='text-xl font-medium'>Active</h3>
      </div>

      <div className='h-40 w-[45%] bg-yellow-400 py-6 px-9 rounded-xl'>
        <h2 className='text-3xl'>{taskNumbers.failed}</h2>
        <h3 className='text-xl font-medium'>Failed</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;

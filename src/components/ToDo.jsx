import React, { useState } from 'react';

function ToDoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const addTask = () => {
    if (task !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="container">
      <h2>ToDo's</h2>
      <div className="todo-container">
        <ul>
          <li className="task-item">
            <input
              type="text"
              value={task}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder="Add task here..."
            />
          </li>
          {tasks.map((item, index) => (
            <li key={index} className="task-item">
              {item}
              <i onClick={() => deleteTask(index)} className="fa fa-times" style={{ color: 'red' }}></i>
            </li>
          ))}
          <li></li>
          <div className="items-left">{tasks.length} item left</div>
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
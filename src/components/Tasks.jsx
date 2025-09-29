import React, { useState, useEffect } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  return (
    <div>
      <h2>Tasks</h2>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a task..."
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, i) => (
          <li
            key={i}
            className={task.completed ? "completed-task" : ""}
            onClick={() => toggleTask(i)}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

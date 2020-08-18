import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import Task from './Task';
import List from './List';

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios
      .get(`${window.API_URL}/tasks`)
      .then(({ data }) => {
        setTasks(data);
      });
  }, []);

  // Добавление задач
  const onAddTask = useCallback((taskObj) => {
    const newTask = [...tasks, taskObj];
    setTasks(newTask);
  }, [setTasks, tasks]);

  // Редактирование задач
  const onEditTask = useCallback((taskId, taskText) => {
    const newTaskText = window.prompt('Текст задачи', taskText);

    if (!newTaskText) {
      return;
    }
    // 
    axios
      .patch(`${window.API_URL}/tasks/` + taskId, {
        taskText: newTaskText
      })
      .then(() => {
        const newList = tasks.map(item => {
          if (item.id === taskId) {
            return {
              ...item,
              taskText: newTaskText
            }
          }

          return item;
        });

        setTasks([...newList]);
      })
      .catch(() => {
        alert('Не удалось удалить задачу');
      });
  }, [setTasks, tasks]);

  // Удаление задач
  const onRemoveTask = useCallback((taskId) => {
    if (window.confirm('Вы действительно хотите удалить задачу?')) {
      axios.delete(`${window.API_URL}/tasks/` + taskId)
        .then(() => {
          setTasks(tasks.filter(item => item.id !== taskId));
        })
        .catch(() => {
          alert('Не удалось удалить задачу');
        });
    }
  }, [setTasks, tasks]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO</h1>
      </header>
      <main className="AppMain">
        {/* Ввод задач */}
        <Task onAddTask={onAddTask} />

        {/* Вывод списка задач */}
        <List tasks={tasks} onRemoveTask={onRemoveTask} onEditTask={onEditTask} />
      </main>
    </div>
  );
}

export default App;

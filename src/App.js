import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Task from './Task';
import List from './List';
// import DB from './tasks/db.json';




function App() {
  const [tasks, setTasks] = useState(null);
  
    useEffect(() => {
      axios
      .get('http://localhost:3001/tasks')
      .then(({ data }) => {
      setTasks(data);
      });
    }, []);
    //Добавление задач
    const onAddTask = (taskObj) => {
      const newTask = [...tasks, taskObj];
      setTasks(newTask);
    };
    //Редактирование задач
    const onEditTask = (taskId , taskText) => {
        const newTaskText = window.prompt('Текст задачи', taskText);
        if (!newTaskText){
          return;
        };
        const newList = tasks.map(item => { 
          if (item.id === taskId){
            tasks.taskText = newTaskText;
            console.log('Новое значение '+ tasks.taskText,'Старое значение '+taskText);
          }
          
          return item;
        });
        
        setTasks(newList);
        console.log(newList);
        axios
        .patch('http://localhost:3001/tasks/' + taskId,{
          taskText: newTaskText
        })
        .catch(() => {
          alert('Не удалось удалить задачу');
        });
      
    };
    //Удаление задач
    const onRemoveTask = (taskId) => {
      if (window.confirm('Вы действительно хотите удалить задачу?')) {
        const newList = tasks.filter(item => item.id !== taskId) 
        setTasks(newList);
        axios.delete('http://localhost:3001/tasks/' + taskId).catch(() => {
          alert('Не удалось удалить задачу');
        });
      }
    };
  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO</h1>
      </header>
      <main className="AppMain">
      {/* Ввод задач */}
        <Task onAddTask={onAddTask}/>
      {/* Вывод списка задач */}
        {tasks && <List tasks={tasks} onRemoveTask={onRemoveTask} onEditTask={onEditTask}/>}
      </main>
    </div>
  );
}

export default App;

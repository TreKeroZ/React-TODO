import React from 'react';
import Task from './Task';
import List from './List';
import DB from './tasks/db.json';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO</h1>
      </header>
      <main className="AppMain">
      {/* Ввод задач */}
        <Task />
      {/* Вывод списка задач */}
        <List tasks={DB.tasks}/>
      </main>
    </div>
  );
}

export default App;

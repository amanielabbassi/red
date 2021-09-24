import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskListe from './Components/TaskListe';

import FilterTask from './Components/FilterTask';
import AddTask from './Components/AddTask';
function App() {
  return (
    <div className="App">
    <h1>Todo App</h1>
    <AddTask/>
    <FilterTask/>
     <TaskListe/>
    </div>
  );
}

export default App;
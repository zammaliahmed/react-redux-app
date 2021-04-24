import './App.css';
import TodoInput from './Components/TodoInput';
import Todolist from './Components/Todolist';
import 'bootstrap/dist/css/bootstrap.css' ;
function App() {
  return (
    <div className="App m-8">
              <TodoInput/> 
        <Todolist/>
    </div>
  );
}

export default App;
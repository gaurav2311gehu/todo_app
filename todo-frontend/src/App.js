import './styles.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoList />  {/* 🔹 Input + List yaha handle hoga */}
    </div>
  );
}

export default App;

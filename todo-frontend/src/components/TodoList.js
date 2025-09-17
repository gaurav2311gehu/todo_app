import { useState, useEffect } from "react";
import axios from "axios";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  // Fetch todos on load
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await axios.get("http://localhost:3001/get-todos");
      setTodos(res.data);
    } catch (err) {
      console.error("❌ Error fetching todos:", err);
    }
  };

  // Add new todo
  const handleAddTodo = async () => {
    if (!text) return;
    try {
      await axios.post("http://localhost:3001/add-todo", { text });
      setText(""); // clear input
      fetchTodos(); // refresh todos
    } catch (err) {
      console.error("❌ Error adding todo:", err);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./Component/Header";
import { Todos } from "./Component/Todos";
import { Footer } from "./Component/Footer";
import { AddTodo } from "./Component/AddTodo";



// Import BrowserRouter instead of createBrowserRouter
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  // Delete a todo by comparing its sno (unique identifier)
  const onDelete = (todo) => {
    console.log("Deleting", todo);
    setTodos((prevTodos) => {
      return prevTodos.filter((e) => e.sno !== todo.sno);
    });
  };

  const addTodo = (title, desc) => {
    let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    };
    setTodos((prevTodos) => [...prevTodos, myTodo]);
    console.log("Added Todo:", myTodo);
  };
  
  // Initialize todos state from local storage or default to an empty array
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Update local storage whenever todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <div className='app-background'>
      <Router>
      <Header title="TODO-LIST" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </Router>
    </div>
  );
}

export default App;

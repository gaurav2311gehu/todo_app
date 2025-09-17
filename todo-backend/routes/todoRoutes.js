const express = require("express");
const Todo = require("../models/todoModel");

const router = express.Router();

// Get all todos
router.get("/get-todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
});

// Add new todo
router.post("/add-todo", async (req, res) => {
  try {
    const newTodo = new Todo({ text: req.body.text });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(500).json({ error: "Failed to add todo" });
  }
});

module.exports = router;

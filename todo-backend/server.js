const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const todoRoutes = require("./routes/todoRoutes"); // ✅ import routes
const newTodo = new Todo({ text: req.body.title });

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sainig273:h2myFzliRJtxfPZy@todoappdb.lr3iwcy.mongodb.net/?retryWrites=true&w=majority&appName=TodoAppDB");
        console.log("✅ MongoDB connected successfully");   
    } catch(error) {
        console.error("❌ MongoDB connection error:", error);
    }
};

connectDB();

// ✅ use the routes
app.use("/", todoRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});

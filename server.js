import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import UserRoutes from "./Routes/UserRoute.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// DB connection
connectDB();

// Routes
app.use("/", UserRoutes);

// Server
const port = process.env.PORT || 1007;
app.listen(port, () => console.log(`Server running on port ${port}`));
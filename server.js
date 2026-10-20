import "dotenv/config";
import mongoose from "mongoose";
import app from "./server/express.js";
import router from "./server/assets-router.js";
import contactRoutes from "./server/routes/contactRoutes.js";
import express from "express";
import projectRoutes from "./server/routes/projectRoutes.js";
import educationRoutes from "./server/routes/educationRoutes.js";
import userRoutes from "./server/routes/userRoutes.js";
import authRoutes from "./server/routes/authRoutes.js";

app.use("/src", router);

app.get("/", function (req, res) {
    res.json({ message: "Welcome to My Portfolio application." });
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((error) => console.log("MongoDB connection failed:", error.message));

app.use(express.json());

app.use("/api/contacts", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/qualifications", educationRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(3000);
console.log("Server running at http://localhost:3000/");
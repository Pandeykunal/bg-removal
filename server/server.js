import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

const PORT = process.env.PORT || 4000;
const app = express();

await connectDB();

app.use(cors());

// Webhook FIRST (raw body)
app.use(
  "/api/user/webhooks",
  express.raw({ type: "application/json" }),
  userRouter
);

// JSON middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => res.send("API Working"));

// Routes
app.use("/api/user", userRouter);
app.use("/api/image", imageRouter); // ✅ Correct path

app.listen(PORT, () =>
  console.log("Server running on port " + PORT)
);
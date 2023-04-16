import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db.js";
import { errorHandler } from "./middleware/error.js";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/post.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server port: ${process.env.PORT}`);
});

import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db.js";
import { errorHandler } from "./middleware/error.js";
import authRoutes from "./routes/auth.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/auth", authRoutes);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server port: ${process.env.PORT}`);
});

import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db.js";
import { errorHandler } from "./middleware/error.js";
import authRoutes from "./routes/auth.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/auth", authRoutes);

app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server port: ${process.env.PORT}`);
});

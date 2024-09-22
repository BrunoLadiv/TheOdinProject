import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/authRouter.js";
import postsRouter from "./routes/postsRouter.js";
import tagsRouter from "./routes/tagsRouter.js";
import cors from "cors";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;

const whitelist = [
  "http://localhost:3000",
  "http://127.0.0.1:5173",
  "http://localhost:5173",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (
      whitelist.includes(origin) ||
      !origin ||
      origin.startsWith("http://192.168.1.")
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

const app = express();
app.use((req, res, next) => {
  console.log(`Request Origin: ${req.get("Origin")}`); // Logs the origin of the incoming request
  next();
});
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/posts", postsRouter);
app.use("/api/tags", tagsRouter);

app.get("*", (req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

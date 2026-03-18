import express from "express";
import dotenv from "dotenv";
import connectToDb from "./connectToDb.js";
import { notesRouter } from "./routes/notes.route.js";
import cors from "cors";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json()); // 👈 ye line missing thi

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/notes", notesRouter);

app.listen(PORT, async () => {
  await connectToDb();
  console.log(`Server is running on port ${PORT}`);
});
[];

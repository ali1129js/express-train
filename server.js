import express from "express";
import cors from "cors";
const app = express();
// add cors
app.use(cors());
//add middleware
app.get("/", (req, res) => {
  res.send(data);
});

//fake data

const data = [
  {
    text: "Task five",
    id: 1,
    isCompleted: false,
  },
  {
    text: "Task nine",
    id: 2,
    isCompleted: false,
  },
];

const PORT = process.env.port || 5000;
app.listen(PORT, () => console.log(`Express is running on port : ${PORT}`));

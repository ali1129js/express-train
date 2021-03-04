import express from "express";
import cors from "cors";

// app init
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
    id: 5,
    isCompleted: false,
  },
  {
    text: "Task nine",
    id: 9,
    isCompleted: false,
  },
];

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Express is running on port : ${PORT}`));

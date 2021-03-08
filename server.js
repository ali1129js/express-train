import express from "express";
import cors from "cors";

// app init
const app = express();

// Middlewares
// -For handling Post request
app.use(express.urlencoded({ extended: false }));
// -For handling Post request as JSON
app.use(express.json());
// -add cors
app.use(cors());

//add root route
app.get("/", (req, res) => {
  res.send(data);
});
app.post("/post", (req, res) => {
  res.status(201).send("posted");
  console.log(req.body);
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

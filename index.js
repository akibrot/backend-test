import express from "express";
import cors from "cors";

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());

app.listen(process.env.PORT || 7070, () => {
  console.log("app started");
});

app.get("/", (req, res) => {
  res.send("app started welcome");
});

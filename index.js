import express from "express";

const app = express();
app.use(express.json({ limit: "50mb" }));

app.listen(process.env.PORT || 7070, () => {
  console.log("app started");
});

app.get("/", (req, res) => {
  res.send("app started welcome");
});

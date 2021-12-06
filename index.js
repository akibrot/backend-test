import express from "express";
import router from "./router/router.js";

const app = express();
app.use(express.json({ limit: "50mb" }));

app.listen(process.env.PORT || 7070, () => {
  console.log("app started");
});

app.use(router)

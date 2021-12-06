import express from "express";
import router from "./router/router.js";
import cors from 'cors'
import mongoose  from "mongoose";
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors())
app.listen(process.env.PORT || 7070, () => {
  console.log("app started");
});

app.use(router)

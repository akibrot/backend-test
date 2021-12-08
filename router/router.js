import express from "express";
import { data, welcome } from "../controller/controllers.js";
const router = express.Router();

router.get("/", welcome);
router.get("/data",data)

export default router;

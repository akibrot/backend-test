import express from "express";
import { welcome } from "../controller/controllers.js";
const router = express.Router();

router.get("/", welcome);

export default router;

import express from "express";
import home from "./home.ctrl.js";

const router = express.Router();

router.get("/", home.hello);
router.get("/login", home.login);

export default router;

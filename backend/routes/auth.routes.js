import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.use(express.json()); // for parsing JSON payloads
router.use(express.urlencoded({ extended: true }));

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

export default router;
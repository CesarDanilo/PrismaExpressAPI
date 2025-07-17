import express from "express";
import ControllerFetchUsers from "../../controllers/Usuario/ControllerFetchUsers";
const router = express.Router();

router.get('/fetchusers', ControllerFetchUsers)

export default router;

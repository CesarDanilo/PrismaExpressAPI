import express from 'express'
import allUsers from '../api/users'
const router = express.Router();

router.use('/users', allUsers)

export default router;
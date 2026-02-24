import express from "express"
import { addUser, showUsers, deleteUser, login } from "../controllers/userController.js"

const router = express.Router()

router.post("/addUser", addUser)
router.get("/showUsers", showUsers)
router.delete("/deleteUser/:id", deleteUser)
router.post("/login", login)

export default router
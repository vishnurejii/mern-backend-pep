import express from "express"
import { addUser, showUsers, deleteUser, login } from "../controllers/userController.js"
import { authenticate,authorize } from "../middleware/auth.js";


const router = express.Router()

router.post("/signup", addUser)
router.get("/",authenticate,authorize("admin"), showUsers)
router.delete("/:id",authenticate,authorize("admin"), deleteUser)
router.post("/login", login)

export default router
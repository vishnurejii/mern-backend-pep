import express from "express"
import dbConnect from "./config/db.js"
import Router from "./routes/userRoutes.js"

const app = express()

app.use(express.json())

app.use("/api/users", Router)

const startServer = async () => {
    await dbConnect()
    app.listen(8080, () => console.log("server started 8080"))
}

startServer()
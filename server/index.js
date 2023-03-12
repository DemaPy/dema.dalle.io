import express from "express";
import * as dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from "./mongoDB/connect.js";

import postRoutes from './routes/post.js'
import dalleRoutes from './routes/dalle.js'

dotenv.config()

const app = express()
app.use( cors() )
app.use( express.json({limit: "50mb"}) )
app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

app.get("/", async (req, res) => {
    res.send("Hello from Server Yevheniia Maslova!")
})


const start = async () => {

    try {
        connectDB(process.env.MONGO_DB)
        app.listen(8080, () => {
            console.log("Server has been started on port: http://localhost:8080")
        })
    } catch (error) {
        console.log(error)
    }

}

start()
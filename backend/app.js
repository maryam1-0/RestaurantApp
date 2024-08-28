import express from "express";
import cors from 'cors';
import dotenv from 'dotenv'
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js"

const app=express()
dotenv.config({path: "./config/config.env"})

//middlewares 
app.use(cors({
    origin:[process.env.FRONTEND_URL], //frontend path to which our backend connects
    methods:["POST"],
    credentials:true
}))

app.use(express.json()) //we provide string, it'll convert it in json object
app.use(express.urlencoded({extended:true}))
app.use("/api/v1/reservation",reservationRouter)

dbConnection()

app.use(errorMiddleware)

export default app
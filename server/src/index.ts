import 'reflect-metadata' //first import (for DI)
import 'dotenv/config'  //загружает переменные окружения из файла .env в process.env
import express from "express"
import cors from 'cors'
import mainRouter from "./routes/mainRouter.js"
import multer from "multer"

const app = express()
const upload = multer()

app.use(cors()) //хз для чего не понял
app.use(express.json()) // для application/json в req
app.use(express.urlencoded({ extended: true })) // для form-data
app.use(upload.single('file'))
app.use('/', mainRouter)

const start = () => {
  app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
  })
}

start()
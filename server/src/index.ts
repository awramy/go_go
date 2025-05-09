import express from "express"
import cors from 'cors'
import mainRouter from "./routes/mainRouter.js"

const app = express()

app.use(cors()) //хз для чего не понял
app.use(express.json()) // для application/json в req
app.use(express.urlencoded({ extended: true })) // для form-data
app.use('/', mainRouter)

const start = () => {
  app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
  })
}

start()
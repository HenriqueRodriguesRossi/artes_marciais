const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
require("./database/connect")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

const StudentRouter = require("./routes/StudentRouter")
app.use(StudentRouter)

const TeacherRouter = require("./routes/TeacherRouter")
app.use(TeacherRouter)

module.exports = app
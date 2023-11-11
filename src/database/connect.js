const mongoose = require("mongoose")
const mongoUri = process.env.MONGO_URI

mongoose.connect(mongoUri)

const connection = mongoose.connection

connection.on("open", ()=>{
    console.log("Conectado ao banco de dados com sucesso!")
})

connection.on("error", (error)=>{
    console.log("Erro ao conectar com o banco: " + error)
})

module.exports = mongoose
const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
    nome_completo: {
        type: String,
        required: true
    },
    data_de_nascimento:{
        type: Date,
        required: true
    },
    cpf:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    senha:{
        type: String,
        required: true
    },
    arte_marcial:{
        type: String,
        required: true
    },
    graduacao:{
        type: String,
        required: false,
        default: "Faixa branca"
    },
    criado_em:{
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model("Student", StudentSchema)
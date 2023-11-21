const Student = require("../models/Student")
const yup = require("yup")
const captureErrorYup = require("../utils/captureErrorYup")

exports.newStudent = async(req, res)=>{
    try{
        const {} = req.body
    }catch(error){
        if(error instanceof yup.ValidationError){
            const errors = [captureErrorYup(error)]
            return res.status(422).send({
                mensagem: "Erro ao cadastrar o aluno!",
                erros: errors
            })
        }else{
            return res.status(500).send({
                mensagem: "Erro ao cadastrar o aluno!"
            })
        }
    }
}
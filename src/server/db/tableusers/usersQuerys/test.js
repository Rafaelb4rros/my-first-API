import express from "express";
import userQuery from "./insertuser";
import bcrypt from "bcrypt";
const testdele = express.Router();


testdele.post('/', async(req, res) =>{
    try { 
        let Id = req.body.id;
        let Email = req.body.email;
        let Login = req.body.login
        let Senha = req.body.senha;
        Id = await bcrypt.hash(Id);
        Email = await bcrypt.hash(Email);
        Login = Login;
        Senha = await bcrypt.hash(Senha);
    const data = ({
        email:Email,
        login: Login,
        password: Senha
    })
    const test = await userQuery.postadmin(data);
    res.send(200).json(test) 
} catch (err){
    console.log(err);
}
})
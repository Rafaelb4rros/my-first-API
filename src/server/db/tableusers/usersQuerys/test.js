import express from "express";
import userQuery from "./insertuser.js";
import bcrypt from "bcrypt";
const testdele = express.Router();


testdele.post('/', async(req, res) =>{
    try { 
        let Email = req.body.email;
        let Login = req.body.login
        let Senha = req.body.senha;
        Email = await bcrypt.hash(Email);
        Login = Login;
        Senha = await bcrypt.hash(Senha);
    const data = ({
        email:Email,
        login: Login,
        password: Senha
    })
    const test = await userQuery.postadmin(data);
    let Id = test.id;
    Id = await bcrypt.hash(Id);
    res.send(200).json(test) 
} catch (err){
    console.log(err);
}
})

export default testdele;
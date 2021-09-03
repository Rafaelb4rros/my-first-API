// import express from "express";
// import userQuery from "./insertuser.js";
// import bcrypt from "bcrypt";
// const testdele = express.Router();

// testdele.post('/', async(req,res) =>{
//     try { 
//         const Email = await bcrypt.hash(req.body.email, 12);
//         const Senha = await bcrypt.hash(req.body.password, 12);
//         const Login = req.body.login;
//     const data = ({
//         email:Email,
//         login: Login,
//         password: Senha
//     })
//     const test = await userQuery.postadmin(data);
//     const Id = await bcrypt.hash(test.id, 12);
  
//     res.send(200).json(user) 
// } catch (err){
//     console.log(err);
// }
// })
// export default testdele;
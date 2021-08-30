import connection from "./serverDBConfig.js";

connection.sync()
.then(()=>{
    console.log('criado')
}).catch(err =>{
    console.log(err)
})
import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import Router from "./src/server/routes/serverRoutes.js"
import NotFound from "./src/server/errors/NotFount.js";
import AlreadyExists from "./src/server/errors/AlreadyExists.js";;
import InvalidAssignment from "./src/server/errors/InvalidAssignment.js";
import middleware from "./src/middleware/convert/toJson.js";
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/', middleware);

app.use('/api/posts', Router);

app.use((error, req, res, next) => {
    let errorStatus = 500;
    if (error instanceof NotFound) {
        errorStatus = 404;
    }
    if (error instanceof InvalidAssignment) {
        errorStatus = 400;
    }
    if(error instanceof AlreadyExists) {
        errorStatus = 406;
    }
    res.status(errorStatus);
    res.send({ mensagem: error.message, id: error.idError});
})

app.listen(process.env.APP_PORT, ()=>{ console.log(`app on ${process.env.APP_PORT}`)
})


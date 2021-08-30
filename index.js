import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Router from "./src/server/routes/serverRoutes.js"
import errorHandler from "./src/server/errors/ErrorHandler.js";
import convertAllrequeststoJson from "./src/Middlewares/middlewaretest.js";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(convertAllrequeststoJson);
app.use('/api/posts', Router);
app.use(errorHandler);

app.listen(process.env.APP_PORT);


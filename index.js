import express from "express";
import cors from "cors";
import Router from "./src/server/routes/serverRoutes.js"
import errorHandler from "./src/server/errors/ErrorHandler.js";
import convertAllrequeststoJson from "./src/Middlewares/middlewaretest.js";
import userRouter from "./src/server/db/tableusers/tableusersroutes/tableusersRoute.js";
import  customLimiter from "./src/Middlewares/RequestLimit.js";
const app = express();

app.use(customLimiter);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


app.use(convertAllrequeststoJson);
app.use('/api/user/admin', userRouter);
app.use('/api/posts', Router);
app.use(errorHandler);
app.listen(process.env.PORT);


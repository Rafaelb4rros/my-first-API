import NotFound from "./NotFount.js";
import AlreadyExists from "./AlreadyExists.js";
import InvalidAssignment from "./InvalidAssignment.js";
import InvalidUser from "./InvalidUser.js";
import { JsonWebTokenError } from "jsonwebtoken";

const errorHandler = (error, req, res, next) => {
    let errorStatus = 500;
    if (error instanceof NotFound || InvalidUser ) {
        errorStatus = 404;
    }
    if (error instanceof InvalidAssignment || ValidationError || JsonWebTokenError) {
        errorStatus = 400;
    }
    if (error instanceof AlreadyExists) {
        errorStatus = 406;
    }

    res.status(errorStatus);
    res.send({
        mensagem: error.message,
        id: error.idError
    });
}

export default errorHandler;
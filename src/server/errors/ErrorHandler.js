import NotFound from "./NotFount.js";
import AlreadyExists from "./AlreadyExists.js";
import InvalidAssignment from "./InvalidAssignment.js";

const errorHandler = (error, req, res, next) => {
    let errorStatus = 500;
    if (error instanceof NotFound) {
        errorStatus = 404;
    }
    if (error instanceof InvalidAssignment) {
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
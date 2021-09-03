const convertAllrequeststoJson = (req, res, next) => {
    let reqFormat = req.header('Accept');

    if (reqFormat !== 'application/json') {
        reqFormat = 'application/json';
    }
    res.setHeader('Content-Type', reqFormat);
    next();
}


export default convertAllrequeststoJson;
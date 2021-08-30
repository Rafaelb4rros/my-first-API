const convertAllrequeststoJson = (req, res, next) => {
    let reqFormat = req.header('Accept');

    if (reqFormat !== 'application/json') {
        console.log('only json for now');
        reqFormat = 'application/json';
    }
    res.setHeader('Content-Type', reqFormat);
    next();
}


export default convertAllrequeststoJson;
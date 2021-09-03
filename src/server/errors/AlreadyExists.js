
class AlreadyExists extends Error {
    constructor(){
        const ErrorMsg = `Já existe um post com esse link`;
        super(ErrorMsg);
        this.name = `AlreadyExists`;
        this.idError = `ErrorID: 1`;
    }
}

export default AlreadyExists;

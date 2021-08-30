class NotFound extends Error {
    constructor(){
        const ErrorMsg = `Post não encontrado ou não existe`;
        super(ErrorMsg);
        this.name = `NotFound`;
        this.idError = `ErrorID: 0`;
    }
}

export default NotFound;
class InvalidAssignment extends Error {
    constructor(campo){
        const ErrorMsg = `O campo ${campo} está invalido.`;
        super(ErrorMsg);
        this.name = 'InvalidAssignment';
        this.idError = `ErrorID: 2`;
    }
}
export default InvalidAssignment;
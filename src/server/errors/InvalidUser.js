class InvalidUser extends Error{
        constructor(){
            const ErrorMsg = `Usuário Inválido.`;
            super(ErrorMsg);
            this.name = `InvalidUser`;
            this.idError = `ErrorID: 3`;
        }
    }
    

export default InvalidUser;
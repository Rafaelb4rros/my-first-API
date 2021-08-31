import bcrypt from "bcrypt";
import userQuery from "../usersQuerys/insertuser.js";
import InvalidAssignment from "../../../errors/InvalidAssignment.js";
import InvalidUser from "../../../errors/InvalidUser.js";
import * as jwt from './../../../../Middlewares/JWTIntercept.js';

class User {
    constructor({
        email,
        login,
        password
    }) {
        this.email = email;
        this.login = login;
        this.password = password;
    }

    async adminLogin() {
        await this.validar();
        const user = await userQuery.returnAdmin(this.login);
        let Id = ''
        let Email = '';
        let Login = '';
        let Password = '';
        user.map(item => {
            Id = item.id;
            Email = item.email;
            Login = item.login;
            Password = item.password;
        })
         
            const validEmail = await bcrypt.compare(this.email, Email);
            const validLogin = await bcrypt.compare(this.login, Login);
            const validPassword = await bcrypt.compare(this.password, Password);
            if (validEmail && validLogin && validPassword) {
                const token = jwt.sign({user: Id});
                const valid = {
                    user: user,
                    token: token
                }
                return valid;
            } else {
                throw new InvalidUser();
            }
    }
    async validar() {
        const campos = ['email', 'login', 'password'];
        campos.forEach(campo => {
            const valor = this[campo];
            if (typeof valor !== 'string' || valor.length === 0) {
                throw new InvalidAssignment(campo);
            }
        })
    }
}

export default User;
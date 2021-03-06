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
        if (user) {
            const {
                id,
                email,
                password
            } = user
            const validEmail = await bcrypt.compare(this.email, email);
            const validPassword = await bcrypt.compare(this.password, password);
            if (validEmail && validPassword) {
                const token = jwt.sign({
                    user: id
                });
                const valid = {
                    user: user,
                    token: token
                }
                return valid;
            } else {
                throw new InvalidUser();
            }
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
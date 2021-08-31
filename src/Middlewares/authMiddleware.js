import * as jwt from "./JWTIntercept.js";
import userQuery from "../server/db/tableusers/usersQuerys/insertuser.js";
const authMiddleware = async (req, res, next) => {
    if (req.headers.authorization !== undefined) {
        const [, token] = req.headers.authorization.split(' ');

        try {
            const payload = await jwt.verify(token)
            const user = await userQuery.returnAdmin(payload.user);
            if (!user) {
                res.status(404).end();
            }
            next();
        } catch (err) {
            res.send(err);
        }
    } else {
        res.status(403).end();
    }
}

export default authMiddleware;
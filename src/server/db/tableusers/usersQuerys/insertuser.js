
import connectionuser from "./../serverUsersconfig.js"

const userQuery = {
    returnAdmin(login) {
        return connectionuser.findOne({
            where:{
                login: login
            }
        });
    },
}

export default userQuery;
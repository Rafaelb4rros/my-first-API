
import connectionuser from "./../serverUsersconfig.js"

const userQuery = {
    returnAdmin() {
        return connectionuser.findAll({
            where:{
                id: process.env.ADMIN_ID
            }
        });
    },
    postadmin(post) {
        return connectionuser.create(post);
    }
    
}

export default userQuery;
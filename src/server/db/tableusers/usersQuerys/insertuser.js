
import connectionuser from "./../serverUsersconfig.js"

const userQuery = {
    returnAdmin(login) {
        return connectionuser.findOne({
            where:{
                login: login
            }
        });
    }
    // postadmin(post) {
    //     return connectionuser.create(post);
    // }
    
}

export default userQuery;
import connection from "../../serverDBConfig.js";
import connectionuser from "../serverUsersconfig.js";

(async function test() {
    try {
    await connection.sync();
    await connectionuser.sync();
} catch (err) {
    console.log(err)
}
})()


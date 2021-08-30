import connection from "../serverDBConfig.js";

const Query = {

    AgetPosts() {
        return connection.findAll({
            raw: true
        });
    },
    OgetPosts(id) {
        return connection.findOne({
            where: {
                id: id
            }
        })
    },
    OcreatePosts(post) {
        return connection.create(post);
    },
    OchangePosts(id, data) {
        return connection.update(
            data, {
                where: {
                    id: id
                }
            }
        )
    },
    OdeletePosts(id) {
        return connection.destroy({
            where: {
                id: id
            }
        })
    },
    AequalTest(link) {
        return connection.findAll({
            where: {
                link: link
            }
        })
    }
}

export default Query;
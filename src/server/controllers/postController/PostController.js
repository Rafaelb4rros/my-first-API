import Query from "../../db/queryfactory/dbQueryFactory.js";
import NotFound from "../../errors/NotFount.js";
import AlreadyExists from "../../errors/AlreadyExists.js";
import InvalidAssignment from "../../errors/InvalidAssignment.js";

class PostController {
    constructor(id, post) {
        this.id = id;
        this.post = post
    }

    json(dados) {
        return JSON.stringify(dados);
    }


    async postvalidation() {
        this.validar();
        const post = await Query.AequalTest(this.post.link);
        if (post.length !== 0) {
            throw new AlreadyExists();
        } else {
            await Query.OcreatePosts(this.post);
        }
        return this.json(post);
    }
    async putvalidation() {
        this.validar();
        await this.Validate();
        await Query.AequalTest(this.post.link);
        const post = await Query.OchangePosts(this.id, this.post);
        return this.json(post);
    }
    async deletevalidation() {
        await this.Validate();
        const post = await Query.OdeletePosts(this.id);
        return this.json(post);
    }
    
    async Validate() {
        const post = await Query.OgetPosts(this.id);
        if (!post) {
            throw new NotFound();
        }
    }
    
    validar() {
        const campos = ['title', 'description', 'link'];
        campos.forEach(campo => {
            const valor = this.post[campo];
            if (typeof valor !== 'string' || valor.length === 0) {
                throw new InvalidAssignment(campo);
            }
        })
    }
}

export default PostController;
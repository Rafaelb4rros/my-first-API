import PostController from "./postController/PostController.js";

class Controller {
    constructor({
        id,
        title,
        description,
        details,
        link,
        dataCriacao,
        dataAtualizacao,
        versao
    }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.details = details;
        this.link = link;
        this.dataCriacao = dataCriacao;
        this.dataAtualizacao = dataAtualizacao;
        this.versao = versao
    }

    async getByid() {
        const validator = new PostController(this.id);
        const post = await validator.Validate();
        return post;
    }

    async post() {
        const postInfo = ({
            title: this.title,
            description: this.description,
            details: this.details,
            link: this.link,
        });
        const validate = new PostController('', postInfo);
        const post = await validate.postvalidation();
        return post;
    }

    async put() {
        const data = {
            title: this.title,
            description: this.description,
            details: this.details,
            link: this.link
        }
        const validate = new PostController(this.id, data);
        const post = await validate.putvalidation();
        return post;
    }
    async delete() {
        const validate = new PostController(this.id, '');
        const post = await validate.deletevalidation();
        return post;
    }
}

export default Controller;
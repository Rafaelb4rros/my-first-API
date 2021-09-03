import express from "express";
import Controller from "../controllers/Controller.js";
import Query from "../db/queryfactory/dbQueryFactory.js";
import authMiddleware from "../../Middlewares/authMiddleware.js";
const Router = express.Router();

Router.get('/', async (req, res) => {
        const response = await Query.AgetPosts();
        res.status(200).json(response);
});

Router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const postcontroller = new Controller({id: id});
        const response = await postcontroller.getByid();
        res.status(200).send(response);
    } catch (error) {
        next(error);
    }
})

Router.post('/', authMiddleware, async (req, res, next) => {
    try {
        const postcontroller = new Controller(req.body);
        await postcontroller.post();
        res.status(201).end();
    } catch (error) {
        next(error);
    }
});

Router.put('/:id', authMiddleware, async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const body = req.body;
        const data = Object.assign({}, {id: id} , body);
        const postcontroller = new Controller(data);
        await postcontroller.put();
        res.status(204).end();
    } catch (error) {
        next(error);
    }
})

Router.delete('/:id', authMiddleware, async (req, res, next) => {
    try {
        const id = req.params.id;
        const postcontroller = new Controller({id : id});
        await postcontroller.delete();
        res.status(204).end();
    } catch (error) {
        next(error);
    }
})

export default Router;
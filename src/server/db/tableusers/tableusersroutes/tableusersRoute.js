import express from "express"
import User from "../userController/userController.js";
const userRouter = express.Router();

userRouter.post('/', async (req, res, next) =>{
    try {
    const usercontroller = new User(req.body);
    const valid = await usercontroller.adminLogin();
    
    if(valid) {
    res.status(200).json(valid);
    return valid;
    }
    res.status(500).end();
} catch (err) {
   next(err);
}
})
export default userRouter;
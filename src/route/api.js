import express, { Router } from "express";
import apiController from "../controllers/apiController"

let route = express.Router();

const initApiRoute = (app) => {
    route.get('/users', apiController.allUser);
    route.get('/detail-user/:id',apiController.detailUser);
    route.post('/create-new-user', apiController.createNewUser);
    route.put('/updates-user', apiController.updateUser);
    route.delete('/delete-user/:id', apiController.deleteUser);

    return app.use('/', route);
}

export default initApiRoute;
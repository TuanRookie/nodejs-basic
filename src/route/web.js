import express, { Router } from "express";
import homeController from "../controllers/homeController"

let route = express.Router();

const initWebRoute = (app) => {
    route.get('/', homeController.getHomepage)

    route.get('/detail/user/:id', homeController.getDetailPage);

    route.post('/create-new-users', homeController.createNewUser);

    route.post('/delete-users', homeController.deleteUser);

    route.get('/edit-users/:id', homeController.editUser);

    route.get('/updates-user', homeController.updatesUser);

    route.get('/about', (req, res) => {
        res.send('Hello World!')
    })

    return app.use('/', route);
}

export default initWebRoute;
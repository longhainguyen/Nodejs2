import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomepage);

    router.get('/aboutme', homeController.getAboutMe);

    router.get('/crud', homeController.getCRUD);

    router.post('/post-curd', homeController.getPostCRUD);
    router.get('/get-crud', homeController.displayCRUD);

    return app.use("/", router);
}

module.exports = initWebRoutes;
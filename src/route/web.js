import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomepage);

    router.get('/aboutme', homeController.getAboutMe);

    return app.use("/", router);
}

module.exports = initWebRoutes;
import { Router } from "express";
import { userController } from "../controllers/user.controller";
const routes = Router();

routes.get("/", userController.index);
routes.get("/:id", userController.getUser);
routes.get("/search/:query", userController.search);
routes.post("/", userController.store);
routes.put("/:id", userController.updateUser);
routes.delete("/:id", userController.deleteUser);

export default routes;

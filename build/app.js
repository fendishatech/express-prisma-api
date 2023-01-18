"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
class App {
    constructor() {
        this.server = (0, express_1.default)();
        this.middleWares();
        this.routes();
    }
    middleWares() {
        this.server.use(express_1.default.json());
    }
    routes() {
        this.server.use("/api/users", routes_1.userRoutes);
    }
}
exports.default = new App().server;

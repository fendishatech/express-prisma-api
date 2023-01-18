import express from "express";

class App {
  public server;

  constructor() {
    this.server = express();

    this.middleWares();
    this.routes();
  }

  middleWares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use();
  }
}

export default new App().server;

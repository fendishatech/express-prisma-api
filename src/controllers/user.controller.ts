import { Request, Response } from "express";
import prisma from "../services/prisma";

export const userController = {
  async index(req: Request, res: Response) {
    const users = await prisma.user.findMany();
    return res.json(users);
  },
  async store(req: Request, res: Response) {
    const userData = req.body;

    const user = await prisma.user.create({
      data: {
        fName: userData.fName,
        lName: userData.lName,
      },
    });

    return res.json({
      success: true,
      payload: user,
      message: "User was created successfully",
    });
  },
  async getUser(req: Request, res: Response) {
    const paramId = req.params.id;
    const user = await prisma.user.findUnique({
      where: {
        id: paramId,
      },
    });
    return res.json(user);
  },
  async search(req: Request, res: Response) {
    const q = req.params.query;
    const users = await prisma.user.findMany({
      where: {
        fName: {
          startsWith: q,
        },
        // OR: {
        //   fName: {
        //     startsWith: q,
        //   },
        //   lName: {
        //     startsWith: q,
        //   },
        // },
      },
    });
    return res.json(users);
  },
  async updateUser(req: Request, res: Response) {
    const paramId = req.params.id;
    const userData = req.body;
    const updatedUser = await prisma.user.update({
      where: {
        id: paramId,
      },
      data: {
        ...req.body,
      },
    });
    return res.json({
      message: {
        type: "success",
        content: "User was updated successfully",
      },
      updatedUser,
    });
  },
  async deleteUser(req: Request, res: Response) {
    const paramId = req.params.id;
    const deletedUser = await prisma.user.delete({
      where: {
        id: paramId,
      },
    });
    return res.json({
      message: {
        type: "success",
        content: "User was deleted successfully",
      },
      deletedUser,
    });
  },
};

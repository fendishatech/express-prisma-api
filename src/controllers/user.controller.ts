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
    return res.json({ success: true, payload: user });
  },
  async search(req: Request, res: Response) {
    const q = req.params.query;
    const users = await prisma.user.findMany({
      where: {
        OR: [
          {
            fName: {
              contains: q,
            },
          },
          {
            lName: {
              contains: q,
            },
          },
        ],
      },
    });
    return res.json({
      success: true,
      payload: users,
    });
  },
  async updateUser(req: Request, res: Response) {
    const paramId = req.params.id;
    const updatedUser = await prisma.user.update({
      where: {
        id: paramId,
      },
      data: {
        ...req.body,
      },
    });
    return res.json({
      success: true,
      payload: updatedUser,
      message: "User was updated successfully",
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
      success: true,
      payload: deletedUser,
      message: "User was deleted successfully",
    });
  },
};

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const prisma_1 = __importDefault(require("../services/prisma"));
exports.userController = {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield prisma_1.default.user.findMany();
            return res.json(users);
        });
    },
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = req.body;
            const user = yield prisma_1.default.user.create({
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
        });
    },
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramId = req.params.id;
            const user = yield prisma_1.default.user.findUnique({
                where: {
                    id: paramId,
                },
            });
            return res.json({ success: true, payload: user });
        });
    },
    search(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const q = req.params.query;
            const users = yield prisma_1.default.user.findMany({
                where: {
                    fName: {
                        startsWith: q,
                    },
                },
            });
            return res.json({
                success: true,
                payload: users,
            });
        });
    },
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramId = req.params.id;
            const updatedUser = yield prisma_1.default.user.update({
                where: {
                    id: paramId,
                },
                data: Object.assign({}, req.body),
            });
            return res.json({
                success: true,
                payload: updatedUser,
                message: "User was updated successfully",
            });
        });
    },
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const paramId = req.params.id;
            const deletedUser = yield prisma_1.default.user.delete({
                where: {
                    id: paramId,
                },
            });
            return res.json({
                success: true,
                payload: deletedUser,
                message: "User was deleted successfully",
            });
        });
    },
};

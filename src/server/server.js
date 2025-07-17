"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = require("../../generated/prisma");
const routes_1 = __importDefault(require("../routes/routes"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use('/api', routes_1.default);
const prisma = new prisma_1.PrismaClient();
app.listen(PORT, () => {
    console.log(`SERVER RUNNING http://localhost:${PORT}`);
});

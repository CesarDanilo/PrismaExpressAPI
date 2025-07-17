"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ControllerFetchUsers_1 = __importDefault(require("../../controllers/Usuario/ControllerFetchUsers"));
const router = express_1.default.Router();
router.get('/fetchusers', ControllerFetchUsers_1.default);
exports.default = router;

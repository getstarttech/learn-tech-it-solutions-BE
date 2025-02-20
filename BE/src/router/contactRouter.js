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
exports.contactRouter = void 0;
const express_1 = require("express");
const contactRepo_1 = __importDefault(require("../repository/contactRepo"));
exports.contactRouter = (0, express_1.Router)();
exports.contactRouter.post('/send-query', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield contactRepo_1.default.sendQuery(req, res);
}));
exports.contactRouter.post('/send-review', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("testing");
    yield contactRepo_1.default.sendQuery(req, res);
}));

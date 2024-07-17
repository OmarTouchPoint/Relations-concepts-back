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
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageIdValidation = void 0;
const pageInfo_1 = require("../models/pageInfo");
const pageIdValidation = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (id = "") {
    const idExist = yield pageInfo_1.PageInfo.findById(id);
    if (!idExist) {
        throw new Error(`The page that you are looking for with the id: ${id}, does not exist.`);
    }
});
exports.pageIdValidation = pageIdValidation;

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
exports.patchPageInfo = exports.getPageInfo = void 0;
const express_1 = require("express");
const pageInfo_1 = require("../models/pageInfo");
const getPageInfo = (req_1, ...args_1) => __awaiter(void 0, [req_1, ...args_1], void 0, function* (req, res = express_1.response) {
    const { id } = req.params;
    console.log('TODO RESPONDIDO');
    try {
        const pageInfo = yield pageInfo_1.PageInfo.findById(id);
        res.json(pageInfo);
    }
    catch (error) {
        console.error(error);
        // Maneja posibles errores de problemas de conexión
        res.status(500).json({
            msg: 'Internal Server Error'
        });
    }
});
exports.getPageInfo = getPageInfo;
const patchPageInfo = (req_1, ...args_1) => __awaiter(void 0, [req_1, ...args_1], void 0, function* (req, res = express_1.response) {
    console.log('PASA POR PATCH');
    const { id } = req.params;
    try {
        const { instructions, pageTitle, concepts } = req.body;
        const updatePageInfo = yield pageInfo_1.PageInfo.findByIdAndUpdate(id, { instructions, pageTitle, concepts }, { new: true, runValidators: true });
        if (!updatePageInfo) {
            res.status(400).json({
                msg: 'Page not found'
            });
        }
        res.json({
            msg: 'Page updated successfully',
            updatePageInfo
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Internal Server Error'
        });
    }
});
exports.patchPageInfo = patchPageInfo;

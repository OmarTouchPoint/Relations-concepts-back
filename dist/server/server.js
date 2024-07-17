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
exports.Server = void 0;
// import cors from 'cors';
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const config_1 = require("../database/config");
const pageInfo_1 = require("../routers/pageInfo");
class Server {
    //Constructor
    constructor(options) {
        this.app = (0, express_1.default)();
        this.pageInfoPath = '/pageInfo';
        const { port } = options;
        this.port = port;
        //Connect to DB
        this.connectToDB();
        //Middlewares
        this.middlewares();
        //Routes
        this.routes();
    }
    //Functions
    connectToDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.dbConnection)();
        });
    }
    //Middlewares definition
    middlewares() {
        // this.app.use(cors({origin:'*'}))
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true })); // x-www-form-urlencoded
    }
    //Routes definition
    routes() {
        console.log('pasa por routes');
        this.app.use('/pageInfo', pageInfo_1.router);
    }
    //Controllers def
    //Listen def
    listen() {
        this.app.listen(this.port);
        console.log(`Server running in ${this.port}`);
    }
}
exports.Server = Server;

import "dotenv/config";
import {get} from "env-var";

export const envs =  {
    PORT:get('PORT').required().asPortNumber(),
    MONGODB_CNN:get('MONGODB_CNN').required().asString()
}
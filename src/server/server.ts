// import cors from 'cors';
import 'dotenv/config'
import express from 'express';
import { dbConnection } from '../database/config';
import {router as pageInfoRouter}  from "../routers/pageInfo"

interface Options {
    port: number
}

  
export class Server {

    private app = express();
    private readonly port :number;
    public pageInfoPath = '/pageInfo';
    



    //Constructor
    constructor(options:Options){
        const {port} = options;
        this.port = port;

        //Connect to DB
        this.connectToDB();
        

        //Middlewares
        this.middlewares()

        //Routes
        this.routes()
    
    }
    
    //Functions
    
    async connectToDB (){
        await dbConnection();
    }
    //Middlewares definition
    middlewares(){
        // this.app.use(cors({origin:'*'}))


        this.app.use( express.json() );

        this.app.use( express.urlencoded({ extended: true }) ); // x-www-form-urlencoded
        
    }
    //Routes definition
    routes(){
        console.log('pasa por routes')
        this.app.use('/pageInfo', pageInfoRouter)
    }

    //Controllers def


    //Listen def

    listen(){
        this.app.listen(this.port)
        console.log(`Server running in ${this.port}`)
    }


    

}


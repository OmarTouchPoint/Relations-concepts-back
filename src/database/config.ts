import mongoose from 'mongoose';
import {envs} from '../config/envs'
const dbConnection = async () => {

    try {
        
        await mongoose.connect( envs.MONGODB_CNN);
        console.log('DB is Online')

    } catch (error) {
        console.log(error);
        throw new Error('Cant inicializate DB');
    };

};

export {dbConnection}

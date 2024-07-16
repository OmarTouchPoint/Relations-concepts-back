import {query} from 'express';
import {response} from 'express'
import { PageInfo } from '../models/pageInfo';





const getPageInfo = async(req, res= response)=>{

    const {id} = req.params;
    console.log('TODO RESPONDIDO')

    try{
        const pageInfo = await PageInfo.findById(id);

        res.json(pageInfo)
    }
    catch (error){
        console.error(error);

        // Maneja posibles errores de problemas de conexión
        res.status(500).json({
            msg: 'Internal Server Error'
        });
    }


}

export{
    getPageInfo
}
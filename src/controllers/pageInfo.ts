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

const patchPageInfo = async(req, res = response) =>{
    console.log('PASA POR PATCH')
    const {id} = req.params;
    
    try{
        const {instructions, pageTitle, concepts} = req.body;
        const updatePageInfo = await PageInfo.findByIdAndUpdate(id, {instructions, pageTitle, concepts},{ new: true, runValidators: true })

        if(!updatePageInfo){
            res.status(400).json({
                msg:'Page not found'
            })
        }
        res.json({
            msg: 'Page updated successfully',
            updatePageInfo
        });

    }

    catch(error){
        console.error(error);
        res.status(500).json({
            msg: 'Internal Server Error'
        });
    }
}


export{
    getPageInfo,
    patchPageInfo
}
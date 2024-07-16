import {PageInfo} from '../models/pageInfo'

const pageIdValidation = async(id = "")=>{
    const idExist = await PageInfo.findById(id);
    
    if(!idExist){
        throw new Error (`The page that you are looking for with the id: ${id}, does not exist.`);
    } 
}

export {
    pageIdValidation
}

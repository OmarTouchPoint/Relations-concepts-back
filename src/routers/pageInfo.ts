import {Router} from 'express';
import {check, checkSchema} from 'express-validator';
import {validateCamps} from '../middlewares/validateCamps'
import { pageIdValidation } from '../helpers/pageIdValidation';
import { getPageInfo, patchPageInfo } from '../controllers/pageInfo';

const router = Router();

router.get("/", ((req, res)  =>{
res.send('Hola Mundo')
console.log('hola mundo')

}))
//Get a specific page info

router.get('/:id', [
    check('id', 'the id is not valid'). isMongoId(),
    check('id').custom(pageIdValidation),
    validateCamps
], getPageInfo);

router.patch('/:id',[
  check('id', 'the id is not valid').isMongoId(),
  check('id').custom(pageIdValidation),
  checkSchema({
    instructions: {isString:true, errorMessage:'Page instructions are required'},
    pageTitle: {isString: true, errorMessage:'Page title is required'},
    concepts: {isArray: true, isEmpty:false, errorMessage:'The Concepts field must not be empty'}
  }),
  validateCamps
], patchPageInfo)

export {
  router  
    
} 

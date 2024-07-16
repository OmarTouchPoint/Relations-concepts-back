import {Router} from 'express';
import {check} from 'express-validator';
import {validateCamps} from '../middlewares/validateCamps'
import { pageIdValidation } from '../helpers/pageIdValidation';
import { getPageInfo } from '../controllers/pageInfo';

const router = Router();

router.get("/", ((req, res)  =>{
res.send('Hola Mundo')
console.log('hola mundo')

}))
router.get('/:id', [
    check('id', 'the id is not valid'). isMongoId(),
    check('id').custom(pageIdValidation),
    validateCamps
], getPageInfo);

export {
  router  
    
} 

import express ,{Response, Request,NextFunction} from 'express';
import {CreateVandor,GetVandors,GetVandorByID} from '../controllers'
const router= express.Router();

router.post('/',CreateVandor);
// router.get('/',GetVandors);
router.get('/:id',GetVandorByID);

router.get('/', (req :Request, res:Response, next:NextFunction) => {
 return res.json({'response':'Hi there from vandor route'})
})

export {router as VandorRoute}
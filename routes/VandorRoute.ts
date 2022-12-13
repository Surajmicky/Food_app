import express ,{Response, Request,NextFunction} from 'express';
import {CreateVandor,GetVandors,GetVandorByID} from '../controllers'
const router= express.Router();

router.post('/vandor',CreateVandor);
router.get('/vandor',GetVandors);
router.get('/vandor/:id',GetVandorByID);

router.get('/', (req :Request, res:Response, next:NextFunction) => {
 return res.json({'response':'Hi there from vandor route'})
})

export {router as VandorRoute}
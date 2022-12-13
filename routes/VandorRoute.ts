import express ,{Response, Request,NextFunction} from 'express';

const router= express.Router();

router.get('/', (req :Request, res:Response, next:NextFunction) => {
 return res.json({'response':'Hi there from vandor route'})
})

export {router as VandorRoute}
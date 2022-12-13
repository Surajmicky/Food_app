import express ,{Response, Request,NextFunction} from 'express';

const router= express.Router();

router.get('/', (req :Request, res:Response, next:NextFunction) => {
    console.log('hello')
  res.json({message:'Hi there from admin route'})
})

export {router as AdminRoute}
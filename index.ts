import express from 'express'; 
import {VandorRoute,AdminRoute} from './routes';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { MONGO_URI } from './config';
const app=express();
const port= 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use('/admin',AdminRoute);
app.use('/vandor',VandorRoute);
app.listen(port,async()=>{
    try {
        console.clear()
        await  mongoose.connect(MONGO_URI).then(()=>{console.log('connected to DB')})
         console.log(`listening on port ${port}`)
    } catch (error:any) {
        console.log(error.message)
    }
  
})
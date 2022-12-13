import express from 'express'; 
import {VandorRoute,AdminRoute} from './routes'
const app=express();
const port= 8080;
app.use('/admin',AdminRoute);
app.use('/vandor',VandorRoute);
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
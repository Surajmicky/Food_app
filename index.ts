import express from 'express'; 
import {VandorRoute,AdminRoute} from './routes';
import bodyParser from 'body-parser';

const app=express();
const port= 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use('/admin',AdminRoute);
app.use('/vandor',VandorRoute);
app.listen(port,()=>{
    console.clear()
    console.log(`listening on port ${port}`)
})
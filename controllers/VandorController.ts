import {Request,Response,NextFunction} from 'express';
import { CreateVandorInput } from '../data_transfer_object';
import {Vandor} from '../models'
import {generatePassword} from '../utility'
export const CreateVandor = async (req:Request, res :Response,next:NextFunction) => {
    const {  name,ownerName,foodType,pincode,address,phone,email,password,}=<CreateVandorInput> req.body;
    const hashedPassword = generatePassword(password) ;
    const userExist= await Vandor.findOne({email:email});
    if(userExist){
       return res.json({message:'user already exist'})
    }
    const vandor= await Vandor.create({
        name,
        ownerName,
        foodType,
        pincode,
        address,
        phone,
        email,
        password:hashedPassword,
        serviceAvailable:true,
        coverImages:[],
        rating:0,
        
    })
    return res.status(200).json(vandor)

};
export const GetVandors = async (req:Request, res :Response,next:NextFunction) => {
    
}
export const GetVandorByID = async (req:Request, res :Response,next:NextFunction) => {
    
}
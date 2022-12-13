import {Request,Response,NextFunction} from 'express';
import { CreateVandorInput } from '../data_transfer_object';

export const CreateVandor = async (req:Request, res :Response,next:NextFunction) => {
    const {name,ownerName,email,password,phone,foodType}=<CreateVandorInput> req.body;
};
export const GetVandors = async (req:Request, res :Response,next:NextFunction) => {
    
}
export const GetVandorByID = async (req:Request, res :Response,next:NextFunction) => {
    
}
import bcrypt from "bcrypt";

 export const generatePassword=(password:string) =>{
    const saltRounds = 10;
const myPlaintextPassword = password;
 const hashedpassword= bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    if(err){
        return err.message
    }
    console.log(hash)
    return hash;
});
return hashedpassword;
}
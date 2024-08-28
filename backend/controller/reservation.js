import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation=async(req,res,next)=>{
    const {firstName,lastName,email,phoneNumber,date,time}=req.body //we need  thhese  from the frontend
    if(!firstName||!lastName||!email||!phoneNumber||!date||!time){
        return next(new ErrorHandler("Please fill full reservation form",400))
    }
    try {
        await Reservation.create({firstName,lastName,email,phoneNumber,date,time}) //our code wont move forward until it is created
        res.status(200).json({success:true,message:"Reservation created successfully"}) 
    } catch (error) {
        if(error.name==="ValidationError"){
            console.log(error.message)
            const validationErrors=Object.values(error.errors).map((err)=>err.message)
       return next(new ErrorHandler(validationErrors.join(" , ",400))) 
        }
        return next(error) //if any error other than validation error

    }
    
}
import mongoose from "mongoose";
import validator from "validator"; //for email validation

const reservationSchema = new mongoose.Schema({
firstName:{
    type:String,
    required:[true,"First name is required"],
    minlength:[3,"First name must contain atleast 3 characters"],  //if length not 3 then msg displayed
    maxlength:[20, "First name must not exceed 20 characters"]
},
lastName:{
    type:String,
    required:[true,"Last name is required"],
    minlength:[3,"Last name must contain atleast 3 characters"],  //if length not 3 then msg displayed
    maxlength:[20, "Last name must not exceed 20 characters"]
},
email:{
    type:String,
    required:[true,"Email is required"],
    unique:true,
    lowercase:true,
    validate:[validator.isEmail,"Please enter a valid email"], //if validator.isemail is true then ok otherwise msg displayed
},
phoneNumber:{
    type:String,
    required:[true,"Phone number is required"],
    minlength:[11,"Phone number must contain 11 characters"],  //if length not 11 then msg displayed
    maxlength:[11, "Phone number must contain 11 characters"],
},
time:{
    type:String,
    required:[true,"Time is required"]
},
date:{
    type:Date,
    required:[true,"Date is required"]
}
})

export const Reservation=mongoose.model("Reservation", reservationSchema)
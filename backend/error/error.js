//extending javascript built-in class Error, message already exists in suuper class i.e Error so super(message) but  status codre doesnt exist so we get that throough other method
class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode
    }
}
//middleware
export const errorMiddleware=(err,req,res,next)=>{
    console.log(err.messag);
    
err.message=err.message|| "Internal Server Error"
err.statusCode=err.statusCode|| 500

return res.status(err.statusCode).json( 
   { success:false, //false because when function returns false tab hi to error ayega
    message:err.message,
   }
)
}
export default ErrorHandler
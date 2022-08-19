
const commandToDron=(req,res,next)=>{
	try{
	 const {commandType,dronId} =req.body;	
     switch(commandType) {
		case 1:
		  // code block
		  break;
		case 2:
		  // code block
		  break;
		default:
		  // code block
	  }
 
  
 	}catch(err){
		 next(MediaError)
	}
}


module.exports={
	commandToDron
}
const jwt = require("jwt-simple")
const config = require("../config");
const User = require("../model/user.model");
const validationHandler = require('../validator/validationHandler');


exports.login = async(req,res,next) => {

    try{
     const email = req.body.email;
     const password = req.body.password


     const user = await (await User.findOne({email}).select("+password") )

 /// see if that is a user with an email
     if(!user){

          const error = new Error("Wrong Credentials");

          error.statusCode = 401;


          throw error;

     }



      const validPassword = await user.validPassword(password);


      if(!validPassword){
          const error = new Error("wrong Credentials");

          error.statusCode = 401;
          
          throw error
      }

      const token = jwt.encode({
          id:user.id
      }, config.jwtSecret)


      return res.send({user,token})
    }
     catch(err){

        next(err);
     }


}
const validationHandler = require('../validator/validationHandler');

const PostModel = require('../model/post.model');


exports.index = (req,res) =>{


    // throw new Error("some random error");


    res.send({message:"hi"})
}


exports.store = (req,res,next) => {

    
  

    console.log(req.body, "this is req.body" ,req.body.name,'req that body')

    try{

        console.log(req.body.name,'heeyyy')

        validationHandler(req);



        res.send({message:'The name is ' + req.body.name})

    }
    catch(err){


        next(err)
    }


}
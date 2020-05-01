const validationHandler = require('../validator/validationHandler');

const PostModel = require('../model/post.model');


exports.index = (req,res) =>{


    // throw new Error("some random error");


    res.send({message:"hi"})
}


exports.store = async (req,res,next) => {

    
  

    console.log(req.body, "this is req.body" ,req.body.description,'req that body')

    try{

        console.log(req.body.description,'heeyyy')

        validationHandler(req);


      let post = new PostModel()



      post.description = req.body.description;
      post.image = req.file.filename;

      post = await post.save();



      res.send(post)

    }
    catch(err){


        next(err)
    }


}
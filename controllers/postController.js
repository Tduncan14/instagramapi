const validationHandler = require('../validator/validationHandler');
const Post = require('../model/post.model');
;


exports.index =  async (req,res) =>{


    try{
      
        const posts =  await Post.find().sort({
            createdAt: -1
        });


        res.send(posts);

    }

    catch(err){

        next(err);
    }

    // throw new Error("some random error");


    res.send({message:"hi"})
}


exports.store = async (req,res,next) => {

    
  

    console.log(req.body, "this is req.body" ,req.body.description,'req that body')

    try{

        console.log(req.body.description,'heeyyy')

        validationHandler(req);


      let post = new Post()



      post.description = req.body.description;
      post.image = req.file.filename;

      post = await post.save();



      res.send(post)

    }
    catch(err){


        next(err)
    }


}

//  single post

exports.show = async ( req,res) => {


    try{

        const post = await Post.findOne({
            _id : req.params.id
        })


        res.send(post)

    }

    catch(err){

        next(err);
    }




}

exports.update = async (req,res,next) => {

  try{

   validationHandler(req);


   console.log(req.body.description,'hello'
,req.body.description,'this is the description')

   let post =  await Post.findById(req.params.id)
   post.description = req.body.description;
 

   post = await post.save()


   res.send(post)

  }


  catch(err){

   next(err)

  }





}


exports.delete = async (req,res,next) => {

    try{

    let post = await Post.findById(req.params.id)


    post = await post.delete()


    res.send({message:"post is deleted"})

    }


    catch(err){


        next(err)
    }
  



}
 const mongoose = require('mongoose');
 const bcrypt = require('bcryptjs')


 const Schema = mongoose.Schema;

 const UserSchema = new Schema({

  name:{
       type:String,
       trim:true, 
       min:4,
       required:true

  },

   email:{
       type:String,
       required:true
   },
   
   password:{ type:String,
          required:true,
          select:false}


 })

 // making a virtual password
// stores the password as hash
  UserSchema.methods.encryptPassword = async password =>{

    const salt = await bcrypt.genSalt(5);
    const hash = await bcrypt.hash(password,salt);

    return hash


  }

  UserSchema.methods.validPassword = async function(candidatePassword){

    const result = await bcrypt.compare(candidatePassword,this.password)


    return result


  }



 module.exports = mongoose.model('user',UserSchema);
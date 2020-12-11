const mongoose =require('mongoose');
var Celebrities = mongoose.model('Celebrities',{
    name:{
        type:String
    },
    occupation:{
type:String
    },
    catchPhrase:{
type:String
    }
});
module.exports={Celebrities}
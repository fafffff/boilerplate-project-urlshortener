const mongoose=require('mongoose');
const shortid=require('nanoid');
const validator=require('validator');
const urlSchema=new mongoose.Schema({
    originalUrl:{type:String,required:true,
        validate:{
            validator:(v)=>validator.isURL(V),
            message:(props)=>`${props.value} is not URL!`
        }
    },
    shortUrl:{type:String,require:true,unique:true,default:()=>nanoid(8)},
    clicks:{type:Number,default:0},
    createdAt:{type:Date,default:Date.now},

});
module.exports=mongoose.model('Url',urlSchema);
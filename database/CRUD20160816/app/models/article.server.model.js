/**
 * Created by LJ196 on 2016/8/16.
 */
var mongoose=require('mongoose'),
    schema=mongoose.Schema;
var ArticleSchema=new schema({
    created:{
       type:Date,
        default:Date.now
    },
    title:{
        type:String,
        default:'',
        trim:true,
        required:'Title cannot be blank'
    },
    content:{
        type:String,
        default:'',
        trim:true
    },
    creator:{
        type:Schema.ObjectId,
        ref:'User'
    }
});
mongoose.model('Article',ArticleSchema);
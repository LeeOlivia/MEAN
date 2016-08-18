/**
 * Created by LJ196 on 2016/8/16.
 */
var Passport=require('passport'),
    mongoose=require('mongoose');
module.exports=function(){
    var User=mongoose.model('User');
    Passport.serializeUser(function (user,done) {
        done(null,user.id);
    });
    Passport.deserializeUser(function(id,done){
        User.findOne({
            _id:id
        },'-password -salt',function(err,user){
            done(err,user);
        });
    });
    require('./strategies/local.js')();
    //require('./strategies/facebook.js')();
}
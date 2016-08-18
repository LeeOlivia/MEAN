/**
 * Created by LJ196 on 2016/8/16.
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose=require('./config/mongoose'),
    express=require('./config/express'),
    Passport=require('./config/passport');

var db=mongoose(),
    app=express(),
    Passport=Passport();

app.listen(3000);
module.exports=app;
console.log('Server running at http://localhost:3000/users/57ae8b17149a0d101c2fdf0d');
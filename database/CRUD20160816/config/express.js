/**
 * Created by LJ196 on 2016/8/16.
 */
var config=require('./config')
    express=require('express'),
    morgan=require('morgan'),
    compress=require('compression'),
    bodyParse=require('body-parser'),
    methodOverride=require('method-override'),
    session=require('express-session'),
    flash=require('connect-flash'),
    Passport=require('passport');
module.exports=function(){
    var app=express();
    if(process.env.NODE_ENV == "development"){
        app.use(morgan('dev'));
    }else if(process.env.NODE_ENV == "production"){
        app.use(compress());
    }
    app.use(bodyParse.urlencoded({
        extended:true
    }));
    app.use(bodyParse.json());
    app.use(methodOverride());

    app.use(session({
        saveUninitialized:true,
        resave:true,
        secret:config.sessionSecret
    }));
    app.set('views','./app/views');
    app.set('view engine','ejs');

    app.use(flash());
    app.use(Passport.initialize());
    app.use(Passport.session());

    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/users.server.routes.js')(app);
    require('../app/routes/articles.server.routes.js')(app);
    app.use(express.static('./public'));
    return app;
};
/**
 * Created by LJ196 on 2016/8/16.
 */
var users=require('../controllers/users.server.controller')
Passport=require('passport');

module.exports=function (app) {
    app.route('/users')
        .post(users.create)
        .get(users.list);
    app.route('/signup')
        .get(users.renderSignup)
        .post(users.sighup);
    app.route('/signin')
        .get(users.renderSignin)
        .post(Passport.authenticate('local',{
            successRedirect:'/',
            failureRedirect:'/signin',
            failureFlash:true
        }));
    app.get('/signout',users.signout);
    app.get('/oauth/facebook',Passport.authenticate('facebook',{
        failureRedirect:'/signin'
    }));
    app.get('/oauth/facebook/callback',Passport.authenticate('facebook',{failureRedirect:'/signin',successRedirect:'/'}));
    app.route('/users/:userId')
        .get(users.read)
        .put(users.update)
        .delete(users.delete);
    app.param('userId',users.userByID);
};
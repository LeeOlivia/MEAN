/**
 * Created by LJ196 on 2016/8/16.
 */
exports.render=function(req,res){
    if(req.session.lastVisit){
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit =new Date();
    res.render('index',
        {title: 'Hello World',
            // userFullName:req.user ? req.user.fullName : ''
            user:JSON.stringify(req.user)
        });
};
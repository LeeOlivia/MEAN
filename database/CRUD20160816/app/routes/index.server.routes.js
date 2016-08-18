/**
 * Created by LJ196 on 2016/8/16.
 */
module.exports=function(app){
    var index = require('../controllers/index.server.controller');
    app.get('/',index.render);
};
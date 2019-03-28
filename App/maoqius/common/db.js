var mongoose=require('mongoose');
var url='mongodb://localhost/maoqiu';

mongoose.connect(url);
module.exports=mongoose;
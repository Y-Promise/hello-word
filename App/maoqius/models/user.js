var mongoose=require('../common/db');

var user=new mongoose.Schema({
	username:String,
	password:String,
	sex:Boolean,
	address:String,
	phone:Number,
	signature:String
});

user.statistic.findRegister=function(name,pwd,sex,address,phone,callBack){
	this.find({username:name,password:pwd,sex:sex,address:address,phone:phone}callBack);
}

var userModle=mongoose.model('user',user);

module.exports=userModle;
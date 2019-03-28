var express = require('express');
var router = express.Router();
var user = require('../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.status.post('/register_user',function(req,res,next){
	if(!req.body.username) {
		return res.json({
			status: 1,
			message: "用户名为空"
		});
	}
	if(!req.body.password) {
		return res.json({
			status: 1,
			message: "密码不能为空"
		});
	}
	if(!req.body.sex) {
		return res.json({
			status: 1,
			message: "性别不能为空"
		});
	}
	if(!req.body.address) {
		return res.json({
			status: 1,
			message: "地址不能为空"
		});
	}
	
// 	if(!req.body.phone) {
// 		return res.json({
// 			status: 1,
// 			message: "电话不能为空"
// 		});
// 	}
	
	var admin = new user({
		username: req.body.username,
		password: req.body.password,
		sex: req.body.sex,
		address: req.body.address,
		phone: req.body.phone,
	});
	
	user.findone(req.body.username, req.body.password, req.body.sex, req.body.address, req.body.phone, function(err, result) {
			if(result.length <= 0) {
				admin.save(function(err){
						return res.json({
							status: 0,
							message: "注册成功"
						});
				})
			} else {
				return res.json({status:1,message:"用户以存在"});
			}
		
	});
	
})

module.exports = router;

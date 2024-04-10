const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel')
const createError = require('../utills/appError')

exports.signup= async (req,res,next)=>{
    try{
        const user = await user.findOne({email:req.body.email});
        if(user){
            return next(new createError('user already exists!',400));
        }
        const hashedPassword = await bcrypt.hash(req.body.password , 12);
        const newUser = await User.create({
            ...req.body,
            password:hashedPassword,
        })

    }
    catch(err){
        console.log(err)
    }

}
exports.login=async((eq,res,next)=>{



}) 

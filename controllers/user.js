const User = require("../models/user");
const Car = require('../models/car')
module.exports = {
    index: async (req, res, next) => {
        const users = await User.find({});
        res.status(200).json(users);
    },

    newUser: async (req, res, next) => {
        const newUser = new User(req.body);
        const user = await newUser.save();
        console.log(newUser)
        res.status(201).json(user)
    },

    getUser: async(req, res, next) =>{
        const {userId} = req.params;
        console.log(userId)
        const user = await User.findById(userId);
        res.status(200).json(user)
    },

    replaceUser: async(req,res, next)=>{
        const {userId} = req.params;
        const newUser = req.body;
        const result = await User.findByIdAndUpdate(userId, newUser);
        res.status(201).json(result)
    },
    UpdateUser: async(req,res, next)=>{
        const {userId} = req.params;
        const newUser = req.body;
        const result = await User.findByIdAndUpdate(userId, newUser);
        res.status(201).json(result)
    },
    getUserCars: async(req,res,next)=>{
        const {userId} = req.params;
        const user = await User.findById(userId).populate('cars');
        res.status(200).json(user.cars)

    },
    newUserCar: async(req,res, next)=>{
        const {userId} = req.params;
        const newCar = new  Car (req.body)
        const user = await User.findById(userId);
        newCar.seller = user
        await newCar.save();
        user.cars.push(newCar);
        await user.save();
        res.status(201).json(newCar)


    }
}
const express = require("express");
const router = express.Router();
const User = require('../models/user');
const config = require('../config/database');
const jwt = require('jsonwebtoken');

router.post('/signup', (req, res) => {
    if(!req.body.email || !req.body.password) {
        res.json({ success: false, msg: 'Please pass email and password' });
    } else {
        const newUser = new User({
            email: req.body.email,
            password: req.body.password
        });

        newUser.save((err) => {
            if(err) {               
                console.log(err);
                return res.json({ success: false, msg: 'failed' });
            }              
            res.json({ success:true, msg: 'Successfully created new user.' });
        });
    }
});

router.post('/signin', (req, res) => {
    User.findOne({
        email: req.body.email
    }, (err, user) => {
        if(err) throw err;

        if(!user) {
            res.status(401).send({success:false, msg: 'Authentication failed. User not found'});
        } else {
            user.comparePassword(req.body.password, (err, isMatch) => {
                if(isMatch && !err) {
                    const token = jwt.sign(user.toJSON(), config.secret);
                    res.json({success: true, token: `Bearer ${token}`});
                } else {
                    res.status(401).send({success: false, msg: 'Authentication failed'});
                }
            })
        }
    });
});

module.exports = router;

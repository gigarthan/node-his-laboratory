const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const TestNotificationSchema = new Schema({
    date:{
        type: String,
        //required: true
    },
    category:{
        type: String,
        //required: true
    },
    subCategory:{
        type: String,
        //required: true
    },
    testName:{
        type: String,
        //required: true
    }
});

module.exports = mongoose.model('TestNotification', TestNotificationSchema);

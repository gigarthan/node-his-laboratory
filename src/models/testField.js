const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const TestFieldSchema = new Schema({
    testName:{
        type: String,
        required: true
    },
    field:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    minAge:{
        type: String,
        required: true
    },
    maxAge:{
        type: String,
        //required: true
    },
    minValue:{
        type: String,
        //required: true
    },
    maxValue:{
        type: String,
        //required: true
    },
    unit:{
        type: String,
        //required: true
    }
});

module.exports = mongoose.model('TestField', TestFieldSchema);



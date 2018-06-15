const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestFieldSchema = new Schema({
    testName: {
        type: String,
        required: true
    },
    field: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    minAge: {
        type: Number,
        required: true
    },
    maxAge: {
        type: Number,
        //required: true
    },
    minValue: {
        type: Number,
        //required: true
    },
    maxValue: {
        type: Number,
        //required: true
    },
    unit: {
        type: String,
        //required: true
    }
});

module.exports = mongoose.model('TestField', TestFieldSchema);
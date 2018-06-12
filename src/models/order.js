const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({

    //the auto generated id value will be the reqID
    reqId:{
        type:Number,
        required:true
    },
    patientHIN: {
        type: Number,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: [ 'male', 'female' ],
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: [
            'report_issued',
            'sample_required',
            'sample_collected',
        ],
        required: true
    },
    priority: {
        type: String,
        enum: [
            'high',
            'medium',
            'low'
        ],
        required: true
    },
    reqDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    dueDate: {
        type: Date,
        required: true
    },
    reqPerson: {
        type: String,
        required: true
    },
    comment: String,
    department: String,
    category:{
        type:String,
        required:true
    },
    subCategory:{
        type:String,
        required:true
    },
    testName: {
        type: String,
        required: true
    },
    specimenType: String,
    retentionType: String,
    collectedDate: String,
    remarks : String


});

// EXPORT
module.exports = mongoose.model('Order', orderSchema);
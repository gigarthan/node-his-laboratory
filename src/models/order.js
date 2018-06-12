const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({

    // 01.
    // Patient Details
    patientHIN: {
        type: String,
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

    // 02.
    // Request Details
    // The auto generated id value will be the reqID
    reqId:{
        type:String,
        //required:true
    },

    // Associated with the login token
    reqPerson: {
        type: String,
        required: true
    },
    // Associated with the login token
    department:{
        type: String,
        required: true
    },
    // System date
    reqDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    dueDate: {
        type: Date,
        required: true
    },

    // 03.
    // Test Details
    category:{
        type:String,
        //required:true
    },
    subCategory:{
        type:String,
        //required:true
    },
    testName: {
        type: String,
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
    comment: String,

    // Test Details
    status: {
        type: String,
        enum: [
            'report_issued',
            'sample_required',
            'sample_collected',
        ],
        //required: true
    },

    // Specimen Details
    specimen: {
        type: String,
        retentionType: String,
        collectedDate: Date,
        location: String,
        storedDate: Date,
        remarks: String
    }


});

// EXPORT
module.exports = mongoose.model('Order', orderSchema);
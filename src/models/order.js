const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({

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

    // Test Request Details
    //the auto generated id value will be the reqID
    reqId:{
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

    // Auto displayed according to system dataTime
    reqDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    dueDate: {
        type: Date,
        required: true
    },
    //department: String,

    // Displayed According to the Login
    reqPerson: {
        type: String,
        required: true
    },
    departmentCategory:{
        type:String,
        required:true
    },
    departmentSubCategory:{
        type:String,
        required:true
    },

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
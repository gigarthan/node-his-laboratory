const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
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
    patientHIN: {
        type: Number,
        required: true
    },
    testName: {
        type: String,
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
    department: String
});

// EXPORT
module.exports = mongoose.model('Order', orderSchema);
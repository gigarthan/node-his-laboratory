const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const patientSchema = new Scheme({
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
    }
});

module.exports = mongoose.model('Patient', patientSchema);
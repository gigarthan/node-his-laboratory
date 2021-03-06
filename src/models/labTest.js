const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LabTestSchema = new Schema({
    laboratory: {
        type: String,
        //required: true
    },
    category: {
        type: String,
        //required: true
    },
    subCategory: {
        type: String,
        //required: true
    },
    testName: {
        type: String,
        //required: true
    }
});

module.exports = mongoose.model('LabTest', LabTestSchema);
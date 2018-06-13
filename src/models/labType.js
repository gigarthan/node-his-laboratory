//IT16139640

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const labTypeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('LabType', labTypeSchema);
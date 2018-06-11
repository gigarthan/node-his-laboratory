//IT16139640

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const labDepartmentSchema = new Schema({

    name: {
        type: String,
        required: true,
        unique : true
    },

});

module.exports = mongoose.model('LabDepartment', labDepartmentSchema);

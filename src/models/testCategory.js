//IT16139640

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const testCategorySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }
});

module.exports = mongoose.model('TestCategory', testCategorySchema);
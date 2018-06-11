const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const testCategoriesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subCategories: {
        type: Array
    },
});

module.exports = mongoose.model('TestCategories', testCategoriesSchema);
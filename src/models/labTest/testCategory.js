//IT16139640

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const testCategorySchema = new Schema({

    name:{
        type:String,
        unique: true,
        required :true
    },
    subCategoryName:{
        type:String,
       // unique: true,
        required :true
    },
    specimenType: {
        type: String,
    },
    specimenRetentionType: {
        type: String,
    },
    duration: {
        type: String,
    }



});

module.exports = mongoose.model('TestCategory', testCategorySchema);

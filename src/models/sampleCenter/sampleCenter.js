//IT16139640

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SampleCenterSchema = new Schema({

    type:{
        type:String,
        required :true
    },

    name:{
        type:String,
        required :true
    },

    InCharge:{
        type : String
    },

    location:{
        type: String
    },

    email:{
        type:String
    },

    contact1:{
        type:String,
        required :true
    },

    contact2:{
        type:String
    }

});

module.exports = mongoose.model('SampleCenter',SampleCenterSchema);

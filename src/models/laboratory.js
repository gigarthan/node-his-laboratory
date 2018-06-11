//IT16139640

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const laboratorySchema = new Schema({

    name:{
        type:String,
        required :true
    },

    labTypes:{
        type:String,
        required :true
    },

    department:{
        type :String,
        required :true
    },

    count:{
        type:Number
    },

    labInCharge:{
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

module.exports = mongoose.model('Laboratory',laboratorySchema);

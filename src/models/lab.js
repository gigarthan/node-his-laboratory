const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const labSchema = new Schema({

    name:{
        type:String,
        required :true
    },

    labTypes:{
        type:String
    },

    department:{
        type :String
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
        type:String
    },

    contact2:{
        type:String
    }

});

module.exports = mongoose.model('Lab',labSchema);

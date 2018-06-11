const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const testNameSchema = new Schema({



    name:{

        type:String,
        required :true
    },

    categories:{

      type:String
    },

    subCategories:{

        type :String
    },

});

module.exports = mongoose.model('TestNames',testNameSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = new Schema({
    request: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    results: Object
});

module.exports = mongoose.model('Result', resultSchema);
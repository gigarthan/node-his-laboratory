const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', function (next){
    const user = this;
    if(this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, (err, salt) => {
            if(err)
                return next(err);
            bcrypt.hash(user.password, salt, null, (err, hash) => {
                if(err)
                    return next(err);
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

UserSchema.methods.comparePassword = function (pass, cb) {
    bcrypt.compare(pass, this.password, (err, isMatch) => {
        if(err)
            return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);
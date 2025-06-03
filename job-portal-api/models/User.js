const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide the name'],
        trim: true
    },

    email: {
        type: String, 
        required: [true, 'Please provide an email'],
        unique: true,
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,3}$/, 'Please provide a valid email']
    },

    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 6,
        select: false
    },

    role: {
        type: String,
        enum: ['admin', 'recruiter', 'candidate'],
        default: 'candidate'
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Hashing the user password before saving
userSchema.pre('save', async function(next){
    if (!this.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

// Password comparison method 

userSchema.methods.comparePassword = async function (candidatePassword){
    return await bcrypt.compare(canditatePassword, this.password)
};

module.exports = mongoose.model('User', userSchema);
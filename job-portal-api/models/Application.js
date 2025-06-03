const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    candidate: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },

    job: {
        type: mongoose.Schema.ObjectId,
        ref: 'Job',
        required: true
    },

    coverLetter: {
        type: String,
        trim: true
    },

    status: {
        type: String,
        enum: ['pending', 'reviewed', 'rejected', 'accepted'],
        default: 'pending'
    },

    appliedAt: {
        type: Date,
        default: Date.now
    }
});


// Preventing duplicate applications

applicationSchema.index(
    { candidate: 1, job: 1},
    { unique: true }
)

module.exports = mongoose.model('Application', applicationSchema)
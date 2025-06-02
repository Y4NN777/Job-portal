const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
        title: {
            type:String,
            required: [true, 'Please provide job title'],
            trim: true
        },

        description: {
            type: String,
            required: [true, 'Please provide job description']
        },

        company: {
            type: String,
            required: [true, 'Please provide company name'],
            trim: true
        },

        location: {
            type: String,
            required: [true, 'Please provide job location'],
            trim: true
        },

        salary: {
            type: Number,
            required: [true, 'Please provide salary information']
        },

        createdBy: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        },

        createdAt: {
            type: Date,
            default: Date,
            default: Date.now
        }
    });


module.exports = mongoose.model('Job', jobSchema);



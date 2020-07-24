const mongoose = require('mongoose')

const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100,
        minlength: 2
    },
    age: {
        type: Number,
        required: true,
        min: 15,
        max: 100
    },
    gender: {
        type: String,
        required: true,
        enum: [
            'male',
            'female',
            'nonbinary'
        ]
    },
    email: {
        type: String,
        request: true,
        match: /^.+@.+\..+$/
    },
    password: {
        type: String,
        request: true,
        min: 1
    }
    // 8.) es match con cualquier caracter 
})

module.exports = mongoose.model('koders', koderSchema)
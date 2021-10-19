const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },

    data: {
        type: Date,
        default: Date.now
    }
})

mongoose.exports = mongoose.model('Posts', PostSchema)
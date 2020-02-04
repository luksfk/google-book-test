const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    bookId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        trim: true
    },
    authors: [{
        type: String,
    }],
    publishedDate: {
        type: String
    },
    description: {
        type: String,
        trim: true
    },
    thumbnail: {
        type: String
    },
    favorite: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('FavoriteBook', schema);
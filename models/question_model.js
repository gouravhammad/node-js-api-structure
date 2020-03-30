const mongoose = require('mongoose');

// Defining Question Schema
var questionSchema = new mongoose.Schema({

    question: {
        type: String
    },

    options: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'option'
    }],
});

const questionModel = mongoose.model('question',questionSchema);

module.exports = {
    questionModel
}
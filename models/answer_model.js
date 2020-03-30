const mongoose = require('mongoose');

// Defining Question Schema
var answerSchema = new mongoose.Schema({

    question_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'question'
    },

    value: {
       type: String
    }
});

const answerModel = mongoose.model('answer',answerSchema);

module.exports = {
    answerModel
}
const mongoose = require('mongoose');

// Defining Question Schema
var optionSchema = new mongoose.Schema({

    question_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'question'
    },

    value: {
       type: String
    }
});

const optionModel = mongoose.model('option',optionSchema);

module.exports = {
    optionModel
}
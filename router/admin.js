const express = require('express');
const router = express.Router();
const { questionModel } = require('../models/question_model');
const { answerModel } = require('../models/answer_model');
const { optionModel } = require('../models/option_model');

// API for adding new question to the database
router.post('/question', async (req,res)=>{
    try
    {    
        var questionData = req.body;
       
        var temp = {
            question: questionData.question,
            options: []
        }

        var question = new questionModel(temp);
        
        for(i = 0; i < questionData.options.length; i++)
        {
            var optionData = {
                question_id: question._id,
                value: questionData.options[i]
            }
            
            option = new optionModel(optionData)
            await option.save(function(err,result){
                if(err) return res.status(400).json({err});
            });

            question.options.push(option._id)
        }

        question.save(function(err,result){
            if(err)
            {
                return res.status(400).json({err});
            } 
            else
            {
                return res.status(200).json({result});
            }
        });
    }
    catch(e)
    {
        console.log("Error in  POST admin/question",e);
    }
});

// API for saving answer for a question
router.post('/answer', async (req,res)=>{
    try
    {
        var data = req.body;
        var answer = new answerModel(data);

        answer.save(function(err,result){
            if(err)
            {
                return res.status(400).json({err});
            } 
            else
            {
                return res.status(200).json({result});
            }
        });
    
    }
    catch(e)
    {
        console.log("Error in POST admin/answer",e);
    }
});


module.exports = router;
const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/demoDatabase";

mongoose.connect(url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to Database"))
.catch((err) => console.log("Error in Database Connection"));



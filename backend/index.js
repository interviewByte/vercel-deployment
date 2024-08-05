const express = require('express');
const port = 8080;
const app = express();

app.get('/',function(req, res){
    res.end('<h1>Server is Running</h1>')
})

app.listen(port, function(err){
    if(err){
        console.log("Error in serve",err);
        return;
    }
    console.log(`Server up and running on port ${port}`)
})
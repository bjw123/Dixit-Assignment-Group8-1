const express = require("express");
const bodyParser = require('body-parser');
const PORT = 3000
const mongo = require('./services/MongoService(example)')

let app = new express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.get("/",(req, res) => {
    
})


//setup database
// mongo.startDB()


app.listen(PORT,()=>{
    console.log('server started on port 3000')
})
const express = require("express");
const bodyParser = require('body-parser');
const PORT = 3030
const mongo = require('./services/MongoService')

let app = new express();
app.use(express.static(__dirname + "./public/index.html"));
app.use(bodyParser.json());
app.get("/",(req, res) => {
    
})


//setup database
mongo.startDB()


app.listen(PORT,()=>{
    console.log('server started on port 3030')
})
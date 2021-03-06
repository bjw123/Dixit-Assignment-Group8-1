const express = require("express");
const bodyParser = require('body-parser');
const PORT = 3030
const mongo = require('./services/MongoService')
const routers = require('./routes')

let app = new express();
app.use(express.static(__dirname + "/public/"));
app.use(bodyParser.json());

app.use('/createProfile', routers.creatProfile.createProfileRoute)


//setup database
mongo.startDB()


app.listen(PORT,()=>{
    console.log('server started on port 3030')
})
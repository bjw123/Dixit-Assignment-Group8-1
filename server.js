const express = require("express");
const  MongoClient = require("mongodb").MongoClient;
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const uri = "mongodb+srv://admin:admin@cluster0.5cdt0.mongodb.net/test?retryWrites=true&w=majority" //placeholder
const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });

let app = new express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.get("/",(req, res) => {
    console.log("hello world");
    res.send("testing");
})




/*   PLACEHOLDER
let dbData
const openConnectionX = (message) => {
    client.connect((err, db) => {
        dbData = client.db("x").collection("y");
        if (!err) {
            console.log('some Database Connected')
        }
    });
}
openConnectionX();*/





app.listen(3000)
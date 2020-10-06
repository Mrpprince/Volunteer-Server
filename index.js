const express = require('express');
const bodyParser = require('body-parser');
const ObjectId= require('mongodb').ObjectId;
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ynnkd.mongodb.net/Volunteer?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const port = 4141

// const pass=SocialWork;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/registration', (req, res) => {
    
})


client.connect(err => {
    const registration = client.db("Volunteer").collection("registrated");


app.get('/userId', (req, res)=>{
    
    registration.find({email:req.query.email})
    .toArray((err,document)=>{
        res.send(document);
    })
})
    app.post('/registrationId', (req, res) => {
        const registrationId = req.body;
       registration.insertOne(registrationId)
       .then(result=>{
           console.log('data added successfully')
           res.send('SUCCESS');
       })
    })

    app.delete('/delete/:id',(req,res)=>{
        registration.deleteOne({_id:ObjectId(req.params.id)}) 
        .then((result)=>{
           res.send(result);
        })
    })
    app.get('/adminPage',(req, res)=>{
        registration.find({})
        .toArray((err,document)=>{
            res.send(document);
        })
    })
});




app.listen( process.env.PORT ||port)
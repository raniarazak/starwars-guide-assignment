const express = require('express');
const path = require('path');
const request = require('request');

const app = express();
const route = express.Router();
const BASE_URL = "https://swapi.co/api/";

app.get('/characters', (req, resp)=>{
    request(`${BASE_URL}people`, function(err, res, body){
        var people = body;          
        resp.send(JSON.stringify(people));
        console.log(JSON.stringify(people));
    })
})

app.get('/films', (req, resp)=>{
    request(`${BASE_URL}films`, (err,res,body)=>{
        resp.send(JSON.stringify(body));
        console.log(body);
    })
})


app.listen(3000, ()=>{
    console.log("@ 3000");
});
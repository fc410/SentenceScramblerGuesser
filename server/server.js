const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/sentence/1', (req, res) => {
    res.send({'data':{'sentence': 'I love learning code'}})
})

app.get('/sentence/2', (req, res) => {
    res.send({'data':{'sentence': 'Chocolate is the best'}})
})

app.get('/sentence/3', (req, res) => {
    res.send({'data':{'sentence': 'Today is pizza night'}})
})

app.get('/sentence/4', (req, res) => {
    res.send({'data':{'sentence': 'Studying in the library'}})
})

app.get('/sentence/5', (req, res) => {
    res.send({'data':{'sentence': 'Refridgerator'}})
})

app.get('/sentence/6', (req, res) => {
    res.send({'data':{'sentence': 'Shipping Confirmation'}})
})

app.get('/sentence/7', (req, res) => {
    res.send({'data':{'sentence': 'Yesterday Was chilly'}})
})

app.get('/sentence/8', (req, res) => {
    res.send({'data':{'sentence': 'Remember your winter jacket'}})
})

app.get('/sentence/9', (req, res) => {
    res.send({'data':{'sentence': 'eat your vegetables'}})
})

app.get('/sentence/10', (req, res) => {
    res.send({'data':{'sentence': 'superstar celebrity'}})
})

app.get('/sentence/11', (req, res) => {
    res.send({'error':'Out of range. There are only 10 sentences available for Word Scrambler'})
})

app.listen(3001, () => console.log('Backend server live on 3001'))
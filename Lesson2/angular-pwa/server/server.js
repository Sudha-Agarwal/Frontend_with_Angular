const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.get('/api/performance-todos', (req,res)=>{
    const todoList = [{
        id:'task1',
        title:"Buy Milk - performance"      
    },
    {
        id:'task2',
        title:"Buy Bread - performance",
       
    }];
    return res.json(todoList);
})

app.get('/api/freshness-todos', (req,res)=>{
    const todoList = [{
        id:'task1',
        title:"Buy Milk - freshness"      
    },
    {
        id:'task2',
        title:"Buy Bread - freshness",
       
    }];
    return res.json(todoList);
});

app.listen(5000, ()=>{
    console.log("server listening on port 5000")
});
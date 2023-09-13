//Create a web server
const express = require('express');
const app = express();

//Create a port
const port = 3000;

//Create a variable to store comments
const comments = [
    {
        name: 'John',
        comment: 'Hello World!'
    },
    {
        name: 'Mary',
        comment: 'Hello Universe!'
    }
];

//Create a route to get all comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

//Create a route to get a comment by id
app.get('/comments/:id', (req, res) => {
    res.send(comments[req.params.id]);
});

//Create a route to post a comment
app.post('/comments', (req, res) => {
    const comment = {
        name: req.query.name,
        comment: req.query.comment
    };
    comments.push(comment);
    res.send(comment);
});

//Create a route to update a comment
app.put('/comments/:id', (req, res) => {
    const comment = {
        name: req.query.name,
        comment: req.query.comment
    };
    comments[req.params.id] = comment;
    res.send(comment);
});

//Create a route to delete a comment
app.delete('/comments/:id', (req, res) => {
    comments.splice(req.params.id, 1);
    res.send(comments);
});

//Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
const express = require('express');
const app = express();
const port = process.env.PORT || 5000
const chef = require('./data/chef.json');

app.get('/', (req, res) => {
    res.send('chef data uploading');
})

app.get('/chef', (req, res) => {
    res.send(chef);
})

app.listen(port, () => {
    console.log(`chef data is uploading on port : ${port}`);
})
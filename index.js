const express = require('express');
const app = express();
const port = process.env.PORT || 5000
const cors = require('cors');
const chef = require('./data/chef.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('chef data uploading');
})

app.get('/chef', (req, res) => {
    res.send(chef);
})
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chef.find(c => c._id == id);
    res.send(selectedChef);
})

app.listen(port, () => {
    console.log(`chef data is uploading on port : ${port}`);
})
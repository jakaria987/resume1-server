const express = require('express');
const app = express();

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('chef data uploading');
})

app.listen(port, () => {
    console.log(`chef data is uploading on port : ${port}`);
})
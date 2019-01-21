const express = require('express');
const app = express();
const itemData = require('../APItest/data/item.json');

const PORT = 4000;

const logic = require('../APItest/logic/logic');
app.listen(PORT);

app.get('/', (req, res) => {
    res.send('hello world');
})
app.get('/api/item/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.params);
    console.log(id);
    res.json(itemData[id]);
});


console.log('app is listening on..' + PORT);


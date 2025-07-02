const express = require('express');
const serverless = require('serverless-http');
const app = express();
const port = 3000;

const router = express.Router();
// Funktion zur Simulation eines Gewichts
function getWeight() {
    return (Math.random() * 100000).toFixed(2);
}

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

// GET-Endpunkt, der das Gewicht zurückgibt
app.get('/weight', (req, res) => {
    const weight = getWeight();
    res.json({ weight: `${weight}` });
});

app.use('/', router);


module.exports = app;
module.exports.handler = serverless(app);

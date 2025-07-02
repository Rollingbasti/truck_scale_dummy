const express = require('express');
const app = express();
const port = 3000;

// Funktion zur Simulation eines Gewichts
function getWeight() {
    return (Math.random() * 10000).toFixed(2);
}

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

// GET-Endpunkt, der das Gewicht zurückgibt
app.get('/weight', (req, res) => {
    const weight = getWeight();
    res.json({ weight: `${weight}` });
});

app.listen(port, () => {
    console.log(`Waage-Service läuft auf http://localhost:${port}`);
});

module.exports = app;

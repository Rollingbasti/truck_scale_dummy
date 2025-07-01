const express = require('express');
const app = express();
const port = 3000;

// Funktion zur Simulation eines Gewichts
function getWeight() {
    return (Math.random() * 100).toFixed(2); // Zufälliges Gewicht zwischen 0 und 100 kg
}

// GET-Endpunkt, der das Gewicht zurückgibt
app.get('/weight', (req, res) => {
    const weight = getWeight();
    res.json({ weight: `${weight} kg` });
});

app.listen(port, () => {
    console.log(`Waage-Service läuft auf http://localhost:${port}`);
});

module.exports = app;

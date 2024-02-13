const express = require('express');

const app = express();

app.use(express.json());

let voitures = [
    { id: 1, name: "clio" },
    { id: 2, name: "megane" },
    { id: 3, name: "range" }
];


app.listen(9000, () => {
    console.log('port :' + '9000');
});

app.post('/voitures', (req, res) => {
    car = req.body;
    voitures.push(car);
    res.json("car created");
});

app.get('/voitures', (req, res) => {
    res.json(voitures);
});

app.get('/voitures/:id', (req, res) => {
    car = voitures.find(car => car.id === parseInt(req.params.id));
    if (car)
        res.json(car);
    else
        res.send("Voiture n'existe pas");

});

app.put('/voitures/:id', (req, res) => {
    updatedCar = req.body;
    index = voitures.findIndex(car => car.id === parseInt(req.params.id));
    if (index !== -1) {
        voitures[index] = updatedCar;
        res.json(updatedCar);
    } else {
        res.send("Voiture n'existe pas");
    }
});

app.delete('/voitures/:id', (req, res) => {
    carId = parseInt(req.params.id);
    index = voitures.findIndex(car => car.id === carId);
    if (index !== -1) {
        voitures.splice(index, 1);
        res.send("Voiture supprime");
    } else {
        res.send("Voiture n'existe pas");
    }
});


const express = require('express');
const router = express.Router();
const powerstats = require('../models/powerstats');

router.use(express.json());

router.get('/:heroesId/powerstats', async (req, res) => {
    const result = await powerstats.find();
    res.status(200).json(result);
});

router.post('/:heroesId/powerstats', async (req, res) => {
    const create = new powerstats(req.body);
    await create.save().then(data => {
        res.status(201).json({mensage: data})
    }).catch(err => {
        res.status(500).json({ message: err.message || "Some error occurred while creating the Powerstats." });
    });
});

router.get('/:heroesId/powerstats/:id_powerstats', (req, res) => {
    const id = req.params.id;
    res.status(200).send({
        mensagem: 'GET exclusivo powerstats',
        id: id
    });
});

router.put('/:heroesId/powerstats/:id_powerstats', (req, res) => {
    const id = req.params.id;
    res.status(201).send({
        mensagem: 'PUT exclusivo powerstats',
        id: id
    });
});

router.delete('/:heroesId/powerstats/:id_powerstats', (req, res) => {
    const id = req.params.id;
    res.status(201).send({
        mensagem: 'DELETE exclusivo powerstats',
        id: id
    });
});

module.exports = router;
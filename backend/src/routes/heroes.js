const express = require('express');
const router = express.Router();
const heroes = require('../models/heroes');

router.use(express.json());

router.get('/', async (req, res) => {
    const result = await heroes.find();
    res.status(200).json(result);
});

router.get('/:id', async (req, res) => {
    const result = await heroes.findById(req.params.id);
    res.status(200).json(result);
});

router.post('/', async (req, res) => {
    const create = new heroes(req.body);
    await create.save().then(data => {
        res.status(201).json({data})
    }).catch(err => {
        res.status(500).json({ message: err.message || "Some error occurred while creating the Heroes." });
    });;
});

router.put('/:id', (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: "Heroes content can not be empty" });
    }
    heroes.findByIdAndUpdate(req.params.id, req.body)
        .then(result => {
            if (!result) {
                return res.status(404).json({ message: "Heroes not found with id " + req.params.id });
            }
            res.status(200).json({ message: "Heroes updated successfully!" });
        }).catch(err => {
            if (err.find === 'ObjectId') {
                return res.status(404).json({ message: "Heroes not found with id " + req.params.id });
            }
            return res.status(500).json({ message: "Error updating heroes with id " + req.params.id + err });
        });
});

router.delete('/:id', (req, res) => {
    heroes.findByIdAndRemove(req.params.id)
        .then(result => {
            if (!result) {
                return res.status(404).json({ message: "Heroes not found with id " + req.params.id });
            }
            res.status(200).json({ message: "Heroes deleted successfully!" });
        }).catch(err => {
            if (err.find === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).json({ message: "Heroes not found with id " + req.params.id });
            }
            return res.status(500).json({ message: "Could not delete heroes with id " + req.params.id });
    });
});

module.exports = router;
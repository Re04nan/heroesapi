const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

const heroesSchema = new mongoose.Schema({
    name: {
       type: String,
       require: true
    },
    description: {
        type: String,
        text: true
    },
    rank: {
        type: Number,
        require: true
    },
    active: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: Date,
});

heroesSchema.plugin(autoIncrement.plugin, {
    model: 'heroes',
    field: '_id',
    startAt: 1,
    incrementBy: 1
});

module.exports = mongoose.model('heroes', heroesSchema);


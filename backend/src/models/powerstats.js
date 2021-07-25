const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const powerstatsSchema = new mongoose.Schema({
    heroId: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'heroes',
       require: true
    },
    name: {
        type: String,
        require: true
    },
    value: {
        type: Number,
        validate : {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
       type: Date
    }
});

autoIncrement.initialize(mongoose.connection);

powerstatsSchema.plugin(autoIncrement.plugin, {
    model: 'powerstats', 
    field: '_id',
    startAt: 1,
    incrementBy: 1
});

module.exports = mongoose.model('powerstats', powerstatsSchema);
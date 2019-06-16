const mongoose = require('mongoose');
const Schema = mongoose.Schema

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    vehicles: [{ type: Schema.Types.ObjectId, ref: 'Vehicle' }]
})

module.exports = mongoose.model('Customer', CustomerSchema)

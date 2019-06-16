const mongoose = require('mongoose');
const Schema = mongoose.Schema

const VehicleSchema = new mongoose.Schema({
    vehicleId: {
        type: String,
        required: true
    },
    regNumber: {
        type: String,
        required: true
    },
    lastConnected: {
        type: Date
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    customer: [{ type: Schema.Types.ObjectId, ref: 'Customer' }]
})

module.exports = mongoose.model('Vehicle', VehicleSchema)

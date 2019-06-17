const mongoose = require('mongoose')
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId
const Customer = require('../models/customer')
const Vehicle = require('../models/vehicle')

exports.post = async function(req, res) {
    console.log('body', req.body)
    const { name, address, vehicles } = req.body

    const customer = new Customer({ name, address })

    for (const vehicle of vehicles) {
        const v = new Vehicle(vehicle)
        v.save()

        customer.vehicles.push(v)
    }
    await customer.save()

    res.json({
        status: true
    })
}

exports.removeAll = async function(req, res) {
    try {
        await Vehicle.remove()
        await Customer.remove()
        res.json({
            status: true
        })
    } catch (error) {
        res.json({
            status: false,
            customer: error
        })
    }
}

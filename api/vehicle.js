const mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
const Customer = require("../models/customer");
const Vehicle = require("../models/vehicle");

exports.search = async function(req, res) {
  const {q} = req.query
  try{
    let result = await Customer.find({name: new RegExp(q, 'i') }).populate('vehicles');
    
    let r = []
    for(const cus of result){
      for(const veh of cus.vehicles){
        const {vehicleId, regNumber, lastConnected} = veh
        const {name, address} = cus
        r.push({vehicleId, regNumber, lastConnected, name, address})
      }
    }
    res.json({
      status: true,
      result: r
    });
  }
  catch(error){
      throw error
    res.json({
      status: false,
      result: error
    });
  }
};

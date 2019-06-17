const mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
var dateFns = require('date-fns')
const differenceInSeconds = dateFns.differenceInSeconds
const Customer = require("../models/customer");
const Vehicle = require("../models/vehicle");

exports.search = async function(req, res) {
  const {q, status} = req.query
  try{

    let result = await Customer.find({name: new RegExp(q, 'i') }).populate('vehicles');

    let r = []
    for(const cus of result){
      for(const veh of cus.vehicles){
        const {vehicleId, regNumber, lastConnected} = veh
        const {name, address} = cus

        var diffSec = differenceInSeconds(
          new Date(2019, 6, 16, 12, 30, 20, 0),
          new Date()
        )

        const isConnected = diffSec < 60
        
        if(status === 'connected' && !isConnected)
          continue;
        else if(status === 'disconnected' && isConnected)
          continue;

        r.push({vehicleId, regNumber, lastConnected, name, address, isConnected})
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

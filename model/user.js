const mongoose = require('mongoose');
const moment = require('moment');

const dataSchema = new mongoose.Schema({
    mdata: String,
  });

  module.exports = mongoose.model('machineData', dataSchema)
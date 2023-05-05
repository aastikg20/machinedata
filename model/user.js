const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    mdata: String,
  });

  module.exports = mongoose.model('machineData', dataSchema)
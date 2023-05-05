const express = require('express');
const Data = require('../model/user');

const router = express.Router();

router.post('/addmachineData', async (req, res) => {
  const newData = new Data({
     mdata: req.body.mdata,
     });
    try {
          const dataToSave = await newData.save();
          res.status(200).json(dataToSave)
      }
      catch (error) {
          res.status(400).json({message: error.message})
      }
});

router.get('/machineData', async (req, res) => {
    const data = await Data.findOne({
      mdata: req.body.mdata,
    });
    if(!data) {
      return res.status(500).send(error);
    }
    else{
      return res.status(200).send(data);
    }
    // Data.find((error, data) => {
    //   if (error) {
    //     return res.status(500).send(error);
    //   }
    //   return res.status(200).send(data);
    // });
  });

module.exports = router

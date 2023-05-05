const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const mongoString = process.env.DATABASE_URL
mongoose.set("strictQuery", true);

const database = mongoose.connection
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const port=process.env.PORT
const app = express();
mongoose
  .connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(3000, () =>
      console.log(`Server running on port ${3000}`)
    )
  )
  .catch((err) => console.log(err));
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method == "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
  
    next();
  });

const routes = require('./routes/routes');

app.use('/api', routes)
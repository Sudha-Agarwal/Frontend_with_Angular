const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const Flight = require('./Models/flightModel');
const FlightDetails = require('./Models/flightDetail');
const FlightManager = require('./Models/FlightManager')
const Booking = require('./Models/Booking');

const app = express();

app.use(cors());

app.use(bodyParser.json());

// Endpoint to provide flight source and destination data
app.get('/flights', (req, res) => {
    console.log("flights");
    let flightDetails = new FlightDetails();

    console.log(flightDetails.routePrices);
    res.json(flightDetails.routePrices);
});

// POST endpoint to handle user input
app.post('/flights', (req, res) => {
    const {
      source,
      destination,
      dateOfTravel,
      numberOfAdults,
      numberOfChildren,
      travelClass
    } = req.body;

 let flightManager = new FlightManager();
    const totalPrice = flightManager.calculatePrice(source,destination,numberOfAdults,numberOfChildren,dateOfTravel);    
    if(typeof totalPrice == 'number'){
        res.status(200).json({ totalPrice: totalPrice});
    }
    else{
        res.status(404).json(totalPrice);
    }   
  });

  app.post('/createBooking', (req,res) =>{  

    // Load existing data from the file, if any
    let existingData = [];
    try {
        const data = fs.readFileSync('data.json');
        existingData = JSON.parse(data);
    } catch (err) {
        // File doesn't exist or couldn't be read; an empty array will be used
    }

    // Push the new data into the existing array
    existingData.push(req.body);

    // Write the updated data back to the file
    fs.writeFileSync('data.json', JSON.stringify(existingData, null, 2));

    res.send({message:'Booking created successfully!'});

  })
  
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  


// // const express = require('express')
// // const cors = require('cors')

// // // Mainly used for body posts
// // const bodyParser = require('body-parser')

// // const router = require('./routes/router.js')

// // // LWe are using node with express to run our server

// // const app = express()

// // app.use(bodyParser.json())
// // app.use(bodyParser.urlencoded({extended: false}))

// // const corsOptions = {
// //     origin: '*',
// //     credentials: true,
// //     optionsSuccessStatus: 200
// // }

// // app.use(cors(corsOptions))
// // app.use('/', router)


// // const port = 4000

// // const server = app.listen(port, () => {
// //     console.log(`Server is running on port ${port}`)
// // })

// // VERSION 2

// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// const corsOptions = {
//     origin: '*',
//     credentials: true,
//     optionsSuccessStatus: 200
// };

// app.use(cors(corsOptions));

// // Define a route handler for POST requests to /cities
// app.post('/cities', (req, res) => {
//     // Handle the POST request here
//     // For example, you can save the new city to a database
//     // and then send a response back to the client

//     // Example:
//     // Assuming req.body contains the new city data
//     const newCity = req.body;

//     // Code to save the new city to a database goes here

//     // Sending a response back to the client
//     res.status(201).json(newCity); // Respond with the created city data
// });

// // Start the server
// const port = 4000;
// const server = app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

//VERSION 3
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Sample data for demonstration (replace this with your actual data storage mechanism)
let cities = [
  { id: 1, name: "City 1" },
  { id: 2, name: "City 2" },
  { id: 3, name: "City 3" }
];

// GET /cities - Fetch all cities
app.get('/cities', (req, res) => {
  res.json(cities);
});

// GET /cities/:id - Fetch a single city by ID
app.get('/cities/:id', (req, res) => {
  const { id } = req.params;
  const city = cities.find(city => city.id === Number(id));
  if (city) {
    res.json(city);
  } else {
    res.status(404).json({ error: "City not found" });
  }
});

// POST /cities - Create a new city
app.post('/cities', (req, res) => {
  const newCity = req.body;
  cities.push(newCity);
  res.status(201).json(newCity);
});

// DELETE /cities/:id - Delete a city by ID
app.delete('/cities/:id', (req, res) => {
  const { id } = req.params;
  cities = cities.filter(city => city.id !== Number(id));
  res.status(204).end();
});

// Start the server
const port = 4000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

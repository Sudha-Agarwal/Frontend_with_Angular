const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');


const app = express();
const port = 3000; // You can change this to any port you prefer
const secretkey = '1234';

// Enable CORS for all routes (adjust the options as needed for your environment)
app.use(cors());

app.use(bodyParser.json());

// Sample data for products
const products = [
  { id: 1, name: 'Product 1', category: 'Mobiles' },
  { id: 2, name: 'Product 2', category: 'Mobiles' },
  { id: 3, name: 'Product 3', category: 'Laptops' },
  { id: 4, name: 'Product 4', category: 'Furnitures' },
];

class User{
  firstName;
  lastName;
  email;
  password;

  constructor(firstName, lastName, email, password){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}

const users = [];

app.post('/createUser', (req,res) =>{
  const { firstName, lastName, email, password} = req.body;

  //create a new user with the provided data
  const newuser = new User(firstName,lastName, email, password);
  users.push(newuser);
  res.status(200).json({message: 'User Regitered successfully'});


})

app.post('/login', (req,res) => {
  const {email, password} = req.body;
  //find the user with the provided credentials

  const user = users.find((user) => user.email === email && user.password === password);

  if(user){
    const payload = {
      email:user.email
    };

    const token = jwt.sign(payload,secretkey);
    res.status(200).json({message: 'Login successful', token:token});
  }
  else{
    res.status(401).json({message:'Invalid credentials'});
  } 
});

//Middleware for authentication
/*app.use((req, res, next) => {
  const token = req.header('Authorization');  
  if(!token) return res.status(410).json({message:'Access denied. No token provided'});
  try{
    const decoded = jwt.verify(token, secretkey);
    req.user = decoded;
    next();
  }
  catch(ex){
    res.status(400).send({message:'Invalid Token'});
  }  
}) */


// Route to get products by category
app.get('/products',(req, res) => {
  console.log('get');
  const category = req.query.category;
  const filteredProducts = products.filter(product => product.category === category);
  //res.json(filteredProducts);

  //or
  if (filteredProducts.length === 0) {
    // If there are no matching products, respond with a 404 Not Found status code
    res.status(404).json({ message: 'No products found for the given category' });
  } else {
    // If there are matching products, respond with a 200 OK status code
    res.status(200).json(filteredProducts);
  }
});

app.post('/product', (req,res) => {
  const newProduct = req.body;  
  products.push(newProduct);
  return res.status(201).json(newProduct);
});

app.put('/products', (req,res) => {
  const productId = parseInt(req.body.id,10);

  const productToUpdate = products.find((product) => product.id ===productId);

  if(!productToUpdate){
    return res.status(404).json({error:'Product Not Found'});
  }
  if(req.body.name){
    productToUpdate.name = req.body.name;
  }

  if(req.body.description){
    productToUpdate.description = req.body.description;
  }
  return res.json({message: 'Product updated successfully', product:productToUpdate});

})





// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

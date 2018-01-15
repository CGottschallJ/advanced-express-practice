import express from "express";
import comments from "./comments";
import products from "./products";
import vehicles from "./vehicles";
import contacts from "./contacts";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());


///////* Express Route for Contacts */

//All Contacts
app.get("/contacts", (request, response) => {
  response.json(contacts);
  //console.log('Contacts', contacts);
});

//Single Contact
app.get("/contacts/:id", (request, response) => {
  let id = request.params.id;
  console.log(id);
  response.json(contacts.find(contact => contact._id == id));
});

//Create Contact
app.post("/contacts", (request, response) => {
  response.json(contacts.push(request.body));
})

///////* Express Route for Vehicles */

//All Vehicles
app.get("/vehicles", (request, response) => {
  response.json(vehicles);
  //console.log('Vehicles', vehicles);
});

//Single Vehicle
app.get("/vehicles/:id", (request, response) => {
  let id = request.params.id;
  response.json(vehicles.find(vehicle => vehicle._id == id));
})

//Create Vehicle
app.post("/vehicles", (request, response) => {
  response.json(vehicles.push(request.body));
})

///////* Express Route for Comments */

//All Comments
app.get("/comments", (request, response) => {
  response.json(comments);
  //console.log('Comments', comments);
});

//Single Comment
app.get("/comments/:id", (request,response) => {
  let id= request.params.id;
  response.json(comments.find(comment => comment._id == id));
})

//Create Comment
app.post("/comments", (request, response) => {
  response.json(comments.push(request.body));
})

///////* Express Route for Products */

//All Products
app.get("/products", (request, response) => {
  response.json(products);
  //console.log('Products', products);
});

//Single Product
app.get("/products/:id", (request, response) => {
  let id = request.params.id;
  response.json(products.find(product => product._id == id));
});

//Create Product
app.post("/products", (request, response) => {
  response.json(products.push(request.body));
})

//////
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

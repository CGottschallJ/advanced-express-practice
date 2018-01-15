import express from "express";
import comments from "./comments";
import products from "./products";
import vehicles from "./vehicles";
import contacts from "./contacts";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());


/* Express Route for Contacts */

//All Contacts
app.get("/contacts", (request, response) => {
  response.json(contacts);
});

//Single Contact
app.get("/contacts"/:id, (request, response) => {
  response.json(contacts.id);
});



/* Express Route for Vehicles */

//All Vehicles
app.get("/vehicles", (request, response) => {
  response.json(vehicles);
});

//Single Vehicle


/* Express Route for Comments */

//All Comments
app.get("/comments", (request, response) => {
  response.json(comments);
});

//Single Comment


/* Express Route for Products */

//All Products
app.get("/products", (request, response) => {
  response.json(products);
});

//Single Product

/* Getting Contacts */
// //list
// app.get("/contacts", (request, response) => {
//    response.json();
//    //request.body
// })
//
// //Individual contacts
//
//
// /* Getting Comments */
// //listen
//
//
// //Individual comments
//
//
// /* Getting Vehicles */
// //list
//
//
// //Indidual vehicles
//
//
// /* Getting Products */
// // listen
//
//
// //Individual product




const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

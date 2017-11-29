import express from "express";
import comments from "./comments";
import products from "./products";
import vehicles from "./vehicles";
import contacts from "./contacts";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

//
// /* Getting Contacts */
//
// //list
app.get("/contacts", (request, response) => {
   response.json();
   //request.body
})
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

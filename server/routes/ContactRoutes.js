import express from 'express';
import {list, show, create} from "../controllers/ContactController";

const router = express.Router();

///////* Express Route for Contacts */

//All Contacts
router.get("/contacts", list);

//Single Contact
router.get("/contacts/:id", show);

//Create Contact
router.post("/contacts", create);

export default router;

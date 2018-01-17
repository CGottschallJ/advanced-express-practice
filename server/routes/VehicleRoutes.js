import express from 'express';
import {list, show, create} from "../controllers/VehicleController";

const router = express.Router();

///////* Express Route for Vehicles */

//All Vehicles
router.get("/vehicles", list);

//Single Vehicle
router.get("/vehicles/:id", show);

//Create Vehicle
router.post("/vehicles", create);

export default router;

import {list, show, create} from "../controllers/CommentController.js";
import express from 'express';


const router = express.Router();
///////* Express Route for Comments */

//All Comments
router.get("/comments", list);

//Single Comment
router.get("/comments/:id", show);

//Create Comment
router.post("/comments", create);



export default router;

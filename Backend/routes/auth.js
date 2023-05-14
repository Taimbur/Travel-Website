import express from "express";
 
import { signup ,allUser} from "./../controllers/authContorller.js";
import { signin } from "./../controllers/authContorller.js";
const router = express.Router();

router.post("/register", signup);

router.post("/login", signin);
router.get("/", allUser);

export default router;

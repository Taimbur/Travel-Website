import express from "express";
import { createBooking ,getBooking,getallBooking} from "../controllers/bookingContorller.js";
import { verifyToken } from "../utils/verify_token.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/:id", getBooking);
router.get("/",  getallBooking);

export default router;
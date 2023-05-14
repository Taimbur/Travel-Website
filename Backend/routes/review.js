import express from "express";
import { createReview, getallReviews } from "./../controllers/reviewContorller.js";
import { verifyToken } from "../utils/verify_token.js";

const router = express.Router();

router.post("/:tourId", createReview);
router.get("/", getallReviews);

export default router;

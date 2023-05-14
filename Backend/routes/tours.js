import express from "express";
import { createTour } from "./../controllers/tourController.js";
import { updateTour } from "./../controllers/tourController.js";
import { deleteTour } from "./../controllers/tourController.js";
import { singalTour } from "./../controllers/tourController.js";
import { allTour } from "./../controllers/tourController.js";
import { searchTour } from "./../controllers/tourController.js";
import { getallTourCount } from "./../controllers/tourController.js";
import { verifyUser } from "../utils/verify_token.js";
// import { getSearchByTour } from "./../controllers/tourController.js";

const router = express.Router()

router.post("/", createTour);
router.put("/:id", verifyUser, updateTour);
router.delete("/:id", verifyUser, deleteTour);
router.get("/:id", singalTour);
router.get("/", allTour);
router.get("/get/SearchByTour", searchTour);
router.get("/get/TourCount", getallTourCount);
// router.get("/get/SearchByTours",getSearchByTour)

export default router;

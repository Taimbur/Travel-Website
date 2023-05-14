import Tour from "../models/Tour.js"
import Review from "../models/Review.js"




export const createReview = async (req, res) => {
    const tourId = req.params.tourId
    const newReview = new Review({ ...req.body });
    try {

        const savedReview = await newReview.save();

        // after creating a new review now update the reviews array fo the tour

        await Tour.findByIdAndUpdate(tourId, {
            $push: { reviews: savedReview._id }

        })
        res.status(200).json({ success: true, message: "Review Submitted", data: savedReview });
    } catch (error) {
        res.status(500).json({ success: false, message: "Review Not Submitted ...Mr Sahil khan Master" });
    }
};




export const getallReviews = async (req, res) => {

    try {
        const review = await Review.find()

        res.status(200).json({ success: true, message: " Reviews found all", data: review });
    } catch (error) {
        res.status(500).json({ success: false, message: " Reviews Not found all ...Mr Sahil khan Master" });
    }
};




import Booking from "../models/Booking.js"




export const createBooking = async (req, res) => {

    const newBooking = new Booking(req.body)

    try {
        const savedBooking = await newBooking.save();

        res.status(200).json({ success: true, message: " Booking Submitted", data: savedBooking });
    } catch (error) {
        res.status(500).json({ success: false, message: " BookingNot Submitted ...Mr Sahil khan Master" });
    }
};

export const getBooking = async (req, res) => {

    const booking = req.params.id

    try {
        const getBooking = await Booking.findById(booking)

        res.status(200).json({ success: true, message: " Booking found all", data: getBooking });
    } catch (error) {
        res.status(500).json({ success: false, message: " Booking Not found all ...Mr Sahil khan Master" });
    }
};


export const getallBooking = async (req, res) => {

    try {
        const getBooking = await Booking.find()

        res.status(200).json({ success: true, message: " Booking found all", data: getBooking });
    } catch (error) {
        res.status(500).json({ success: false, message: " Booking Not found all ...Mr Sahil khan Master" });
    }
};



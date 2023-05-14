import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "Tour",
    },
    Email: {
      type: String,
      // require:true
    },
    TourName: {
      type: String,
      // require:true
    },

    FullName: {
      type: String,
      require: true
    },
    guestSize: {
      type: Number,
      require: true
    },
    Phone: {
      type: Number,
      require: true
    },
    BookAt: {
      type: Date,

    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);

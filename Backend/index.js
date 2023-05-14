import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import toursRoutes from "./routes/tours.js";
import authRoutes from "./routes/auth.js";
import reviewRoutes from "./routes/review.js";
import UserRoute from "./routes/users.js";
import bookingRoute from "./routes/booking.js";
import Tour from "./models/Tour.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const corsOption = {
  origin: true,
  credentials: true,
};
app.use(express.json())

//database connect

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connted");
  } catch (error) {
    console.log("connection failed");
  }
};

//testing

app.get("/", (req, res) => {
  res.send("Hello World sahil khan!");
});


 


// middleware

app.use(express.json());
app.use(cors(corsOption));
app.use(cookieParser());
app.use("/api/v1/tours", toursRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/reviews", reviewRoutes);
app.use("/api/v1/user", UserRoute);
app.use("/api/v1/booking", bookingRoute);

app.listen(port, () => {
  connect();
  console.log("done ", port);
});


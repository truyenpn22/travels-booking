import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookRoute from "./routes/booking.js";


dotenv.config();
const app = express();
const corOptions = {
  origin: true,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const port = process.env.PORT || 8000;

//database connection

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB database connected");
  } catch (error) {
    console.log("MongoDB database connected failed");
  }
};

//middleware
app.use(express.json());
app.use(cors(corOptions));
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookRoute);

app.listen(port, () => {
  connect();
  console.log("Server listening on port", port);
});

import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";
app.use(cors({ origin: "*" }));

const flightsSchema = new mongoose.Schema({
  airline: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  airport: {
    type: String,
    required: true,
  },
  departure: {
    type: Date,
    required: true,
  },
  arrival: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
});

const Flight = mongoose.model("flights", flightsSchema);

async function main() {
  await mongoose.connect(
    "mongodb+srv://MartinApiwat:Martin123@cluster0.rigswq4.mongodb.net/?retryWrites=true&w=majority"
  );

  const flights = await Flight.find();

  app.get("/", (req, res) => {
    res.send(flights);
  });
}

main();

app.listen(3000);

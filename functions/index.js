const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HvnvKL4jwVyUXqbFvVQtj2j7s0HsDNG5Xa293nXmdxCbSMf600W9DFWYL29bEjmJZnXHDpfuf8vZ9VX5gHF7ybv000QNy3Nbs"
);
//API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
  // OK - Created Smth
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/harvel-b67be/us-central1/api

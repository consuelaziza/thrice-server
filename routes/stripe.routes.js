const express = require("express")
const router = express.Router();

const { resolve } = require("path");

// This is your real test secret API key.
// inside the ("") you need to add your real key or the test key that stripe will give you in their documentation.
const stripe = require("stripe")('sk_test_51K6hSnLR3Z9JYIoqHauHRStkTJo7tsCTjLG0Ah9Be0PyOfGVRiMP22gORyGFoeGnlTCtKtFg20xWaX6YHqFay9ef00xCMXr1Nc');

router.use(express.static("."));
router.use(express.json());

router.post("/create-payment-intent", async (req, res) => {
  const calculateOrderAmount = items => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
  };

  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd"
  });
  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

module.exports = router;
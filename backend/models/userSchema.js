import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    minLength: [3, "Username must contain atleast 3 characters."],
    maxLength: [40, "Username cannot exceed 40 characters."],
  },
  password: {
    type: String,
    selected: false,
    minLength: [8, "Password must contain atleast 8 characters."],
    maxLength: [32, "Password cannot exceed 32 characters."],
  },
  email: String,
  phone: {
    type: String,
    minLength: [10, "Phone Number must contain exactly 10 digits."],
    maxLength: [10, "Phone Number must contain exactly 10 digits."],
  },
  profileImage: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  paymentMethods: {
    bankTransfer: {
      bankAccountNumber: String,
      bankAccountName: String,
      bankName: String,
    },
    razorpay: {
      razorpayAccountNumber: Number,
    },
    paypal: {
      paypalEmail: String,
    },
  },
  role: {
    type: String,
    enum: ["Auctioneer", "Bidder", "Super Admin"],
  },
  unpaidCommission: {
    type: Number,
    default: 0,
  },
  aauctionsWon: {
    type: Number,
    default: 0,
  },
  moneySpent: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

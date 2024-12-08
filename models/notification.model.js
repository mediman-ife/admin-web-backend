const mongoose = require("mongoose");
const { NOTIFICATION_TYPE } = require('../types/constant');
const notificationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },

    notificationType: {
      type: Number,
      enum: NOTIFICATION_TYPE, // 01 for 'User' ' and 2 for 'Doctor'
    },
    message: String,
    type: { type: String },
    title: String,
    image: { type: String },
    date: String,
    // expiration_date: { type: Date, required: true, expires: 2592000000 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

notificationSchema.index({ user: 1 });
notificationSchema.index({ doctor: 1 });

module.exports = mongoose.model("Notification", notificationSchema);

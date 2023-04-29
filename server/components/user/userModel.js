import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
    },
    userName: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    userGender: { type: String },
    martialStatus: { type: String },
    intrests: [{ type: String }],
    thingsToTry: [{ type: String }],
    thingsToTry: [{ type: String }],
    regularThings: [{ type: String }],
    knownLanguages: [{ type: String }],
    meetupsAttended: { type: Number },
    eventsAttended: { type: Number },
    userLocation: { type: String },
    socialProfiles: [{ type: String }],
    placesVisited: [{ type: String }],
    dob: {
      type: Date,
    },
    smoking: {
      type: String,
    },
    drinking: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

export default User;

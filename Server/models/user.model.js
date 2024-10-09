import mongoose from "mongoose";

const CineShelfUserDataSchema = new mongoose.Schema({
  userPfp: {
    type: String
  },
  history: {
    type: [Object]
  },
  liked: {
    type: [Object]
  },
  watchLater: {
    type: [Object]
  },
  recommended: {
    type: [Object]
  }
});

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    UserCineShelfData: {
      type: CineShelfUserDataSchema
    }
});

const CineShelfUsers = mongoose.model('CineShelfUsers', userSchema);
export {CineShelfUsers};
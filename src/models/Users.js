import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    password: { type: String, required: true, trim: true },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },
    active: { type: Boolean, default: true }
  },
  { timestamps: true }
);

const Users = mongoose.model('Users', userSchema);
module.exports = Users;

const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: [true, "Email Already Exists"],
    validate: {
      validator: function (v) {
        return new RegExp(/^.@.\..$/).test(v);
      },
      message: "Invalid Email Address",
    },
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  fullname: {
    type: String,
  },
  role: {
    type: String,
    enum: ["admin", "teacher", "student"],
    required: true,
  },
  avatar: {
    type: String,
    validate: {
      validator: function (value) {
        return new RegExp(/.\.(png|jpg|webp|jpeg)$/i).test(value);
      },
      message: "Invalid Image format...",
    },
    default: ["images/avatar.png"],
  },
  bio: {
    type: String,
  },
  country: {
    type: String,
  },
  mobile: {
    code: {
      type: String,
      validate: {
        validator: function (value) {
          return new RegExp(/^\+[0-9]{1,3}$/).test(value);
        },
        message: "Invalid Country Code",
      },
    },
    number: {
      type: String,
      validate: {
        validator: function (value) {
          return new RegExp(/^[0-9]{9}$/).test(value);
        },
        message: "Invalid Phone Number",
      },
    },
  },
  cart: [
    {
      course: {
        type: Schema.Types.ObjectId,
        ref: "course",
      },
    },
  ],
  wishlist: [
    {
      course: {
        type: Schema.Types.ObjectId,
        ref: "course",
      },
    },
  ],
  courses: [
    {
      course: {
        type: Schema.Types.ObjectId,
        ref: "course",
      },
      completed: Boolean,
      grade: String,
    },
  ],
});

const UserModel = model("user", UserSchema);

module.exports = UserModel;

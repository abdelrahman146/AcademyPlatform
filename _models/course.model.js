const { Schema, model } = require("mongoose");

const QuizzSchema = new Schema({
  questions: [
    {
      text: {
        type: String,
        required: [true, "question statement is required"],
      },
      answers: [String],
      correctAnswer: Number,
      weight: { type: Number, default: 1 },
    },
  ],
  pass: Number,
});

const ModuleItemSchema = new Schema({
  title: { type: String, required: true },
  order: Number,
  type: {
    type: String,
    enum: {
      values: ["video", "stream", "test", "conference", "article"],
      message: "incorrect type...",
    },
    default: "video",
    required: true,
  },
  summary: { type: String },
  content: {
    type: String,
    required: function () {
      return this.type === "article";
    },
  },
  video: {
    type: String,
    validate: {
      validator: function (value) {
        return new RegExp(/.\.(mp4)$/i).test(value);
      },
      message: "Invalid Image format...",
    },
    required: function () {
      return this.type === "article";
    },
  },
  quiz: QuizzSchema,
});

const ModuleSchema = new Schema({
  title: {
    type: String,
  },
  order: Number,
  items: [ModuleItemSchema],
});

const CourseSchema = new Schema({
  type: {
    type: String,
    enum: {
      values: ["recorded", "interactive"],
      message: "{VALUE} is not supported",
    },
    required: [true, "type is requried"],
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  title: {
    type: String,
    required: [true, "Title is required.."],
    unique: [true, "Title already exist..."],
  },
  description: { type: String },
  language: { type: String, required: [true, "Language is required.."] },
  startingDate: {
    type: Date,
    required: function () {
      this.type === "interactive";
    },
    validate: {
      validator: function (value) {
        if (Date.now > value) {
          return false;
        }
        return true;
      },
      message: `Date provided is in the past`,
    },
  },
  endingDate: {
    type: Date,
    required: function () {
      this.type === "interactive";
    },
    validate: {
      validator: function (value) {
        if (this.startingDate > value) {
          return false;
        }
        return true;
      },
      message: `Date provided should be after starting date`,
    },
  },
  price: {
    type: Number,
    min: [0, "price is not valid"],
  },
  featured_image: {
    type: String,
    validate: {
      validator: function (value) {
        return new RegExp(/.\.(png|jpg|webp|jpeg)$/i).test(value);
      },
      message: "Invalid Image format...",
    },
    required: [true, "featured image is required"],
  },
  intro_video: {
    type: String,
    validate: {
      validator: function (value) {
        return new RegExp(/.\.(mp4)$/i).test(value);
      },
      message: "Invalid Image format...",
    },
    required: [true, "intro video should be mp4"],
  },
  teacher: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  modules: [ModuleSchema],
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
  },
});

const CourseModel = model("course", CourseSchema);

module.exports = CourseModel;

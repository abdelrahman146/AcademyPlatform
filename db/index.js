const sequelize = require("./sequelize");
const {
  Answer,
  Question,
  ConferenceLecture,
  Course,
  Module,
  StreamLecture,
  TestLecture,
  User,
  VideoLecture,
  Wallet,
  Wishlist,
  Cart,
  Enrolled,
} = require("../models");

// User / Cart Pair
User.hasOne(Cart);
Cart.belongsTo(User, { onDelete: "CASCADE" });

// User / Wishlist Pair
User.hasOne(Wishlist);
Wishlist.belongsTo(User, { onDelete: "CASCADE" });

// User / Wallet Pair
User.hasOne(Wallet);
Wallet.belongsTo(User, { onDelete: "CASCADE" });

// User (teacher) / Course (pair)
User.hasMany(Course);
Course.belongsTo(User, { as: "teacher", onDelete: "CASCADE" });

// User / EnrolledCourse Pair
User.hasMany(Enrolled);
Enrolled.belongsTo(User, { onDelete: "CASCADE" });

// Course / Enrolled Course Pair
Course.hasMany(Enrolled);
Enrolled.belongsTo(Course, { onDelete: "CASCADE" });

// Cart / Course Pair
Cart.belongsToMany(Course, { through: "CartItem" });
Course.belongsToMany(Cart, { through: "CartItem" });

// Wishlist / Course Pair
Wishlist.belongsToMany(Course, { through: "WishlistItem" });
Course.belongsToMany(Wishlist, { through: "WishlistItem" });

// Module / Course Pair
Course.hasMany(Module);
Module.belongsTo(Course, { onDelete: "CASCADE" });

// Video Lecture / Module Pair
Module.hasMany(VideoLecture);
VideoLecture.belongsTo(Module, { onDelete: "CASCADE" });

// Conference Lecture / Module Pair
Module.hasMany(ConferenceLecture);
ConferenceLecture.belongsTo(Module, { onDelete: "CASCADE" });

// Stream Lecture / Module Pair
Module.hasMany(StreamLecture);
StreamLecture.belongsTo(Module, { onDelete: "CASCADE" });

// Test Lecture / Module Pair
Module.hasMany(TestLecture);
TestLecture.belongsTo(Module, { onDelete: "CASCADE" });

// TestLecture / Question Pair
TestLecture.hasMany(Question);
Question.belongsTo(TestLecture);

// Question / Answer Pair
Question.hasMany(Answer);
Question.hasOne(Answer, { as: "correctAnswer" });
Answer.belongsTo(Question);

exports.init = async (args) => {
  let options = {};
  if (args && args.length > 2) {
    options = {
      alter: args[2] === "alter",
      force: args[2] === "force",
    };
  }
  try {
    const db = await sequelize.sync(options);
    console.log("Connection has been established");
    return db;
  } catch (e) {
    console.log(e);
  }
};

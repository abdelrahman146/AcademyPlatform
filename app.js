const dotenv = require("dotenv");
const express = require("express");

const { locales } = require("./app.config");
const createRoutes = require("./routes/routes");
const db = require("./db");
const { User } = require("./models");

dotenv.config();
const app = express();
const port = process.env.LOCALE || 3000;

// setup template engine
app.set("view engine", "pug");
app.set("views", "views");

// middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

// setup locales
for (index in locales) {
  app.use(`/${locales[index].lang}`, (req, res, next) => {
    req.locale = locales[index];
    next();
  });
  if (index != 0) {
    app.use(`/${locales[index].lang}`, createRoutes(locales[index]));
  } else {
    app.use("/", createRoutes(locales[index]));
    app.use(`/${locales[index].lang}`, (req, res) => {
      res.redirect(req.path);
    });
  }
}

// 404 Page
app.use((req, res) => {
  console.log();
  res.send("not found");
});

// run app
const args = process.argv;
(async (args) => {
  const dbinstance = await db.init();
  let user = await User.findByPk(1);
  if (!user) {
    user = await User.create({
      email: "user@admin.com",
      password: "HelloWorld",
      fullname: "Abdel Rahman Hussein",
      role: "admin",
      avatar: "images/people/profile.jpg",
      bio: "Just Another Developer",
      country: "sa",
      mobile_number: "501605437",
      mobile_code: "+971",
    });
  }
  let cart = await user.getCart();
  if (!cart) {
    cart = await user.createCart();
  }
  let wishlist = await user.getWishlist();
  if (!wishlist) {
    wishlist = await user.createWishlist();
  }
  app.listen(port, () => {
    console.log(`application started at http://localhost:${port}`);
  });
})();

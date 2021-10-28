const app = require("./app");
const db = require("./db");
const { User } = require("./models");

const port = process.env.LOCALE || 3000;
const args = process.argv;

// run app
(async () => {
  await db.init(args);
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

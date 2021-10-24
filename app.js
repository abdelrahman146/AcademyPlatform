const dotenv = require("dotenv");
const express = require("express");

const { locales } = require("./app.config");
const createRoutes = require("./routes/routes");

dotenv.config();
const app = express();
const port = process.env.LOCALE || 3000;

// setup template engine
app.set("view engine", "pug");
app.set("views", "views");

// middlewars
app.use(express.static("public"));

const getLocales = locales.reduce((locales, current, index) => {
  if (index > 0) {
    return locales + "|" + current.lang;
  }
  return current.lang;
}, "");

// setup locale routes
app.use("/", createRoutes(locales[0]));
app.use(`/${locales[0].lang}`, (req, res, next) => {
  req.locale = locales[0];
  console.log(req.path);
  next();
});
app.use(`/${locales[0].lang}`, (req, res) => {
  res.redirect(req.path);
});
for (localeIndex in locales) {
  if (localeIndex != 0) {
    app.use(`/${locales[localeIndex].lang}`, (req, res, next) => {
      req.locale = locales[localeIndex];
      next();
    });
    app.use(
      `/${locales[localeIndex].lang}`,
      createRoutes(locales[localeIndex])
    );
  }
}
app.use((req, res) => {
  console.log();
  res.send("not found");
});

// run app
app.listen(port, () => {
  console.log(`application started at http://localhost:${port}`);
});

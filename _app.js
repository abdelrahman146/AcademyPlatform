const dotenv = require('dotenv');
const express = require('express');

const { locales } = require('./app.config');
const createRoutes = require('./routes/routes');

dotenv.config();
const app = express();
const port = process.env.LOCALE || 3000;

// setup template engine
app.set('view engine', 'pug');
app.set('views', 'views');

// middlewares
app.use(express.static('public'));

// setup locales
for (index in locales) {
  app.use(`/${locales[index].lang}`, (req, res, next) => {
    req.locale = locales[index];
    next();
  });
  if (index != 0) {
    app.use(`/${locales[index].lang}`, createRoutes(locales[index]));
  } else {
    app.use('/', createRoutes(locales[index]));
    app.use(`/${locales[index].lang}`, (req, res) => {
      res.redirect(req.path);
    });
  }
}

// 404 Page
app.use((req, res) => {
  console.log();
  res.send('not found');
});

// run app
app.listen(port, () => {
  console.log(`application started at http://localhost:${port}`);
});

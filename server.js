const express = require('express');
const app = express();
const budget = require('./models/budget');

app.use(express.urlencoded({ extended: false }));

// index route
app.get('/budget', (req, res) => {
  res.render('index.ejs', {
    budget: budget
  });
});

// post route
app.post('/budget', (req, res) => {
  console.log(req.body);
  budget.push(req.body);
  res.redirect('/budget');
});

// new route
app.get('/budget/new', (req, res) => {
  res.render('new.ejs');
});

// show route
app.get('/budget/:index', (req, res) => {
  res.render('show.ejs', {
    budget: budget[req.params.index]
  });
});

app.listen(3000, () => {
  console.log('connected to 3000');
});

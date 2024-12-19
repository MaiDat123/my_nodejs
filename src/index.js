// import express from 'express';
// import { engine } from 'express-handlebars';

const express = require('express');
const { engine, create } = require('express-handlebars');
const morgan = require('morgan');
const partials = create();
const path = require('path');
const app = express();
const port = 3000

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('handlebars', engine())
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources/views'));
app.engine('.hbs', engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  newsDir: path.join(app.get('views'), 'news'),
  extname: '.hbs'
}));


app.get('/', (req, res) => {
  // res.render('home'); render ra view có layout
  console.log("path news", path.join(app.get('views'), 'partials'));
  res.render('home'); // render ra view không có layout
})

app.get('/tin-tuc', (req, res) => {
  // res.render('home'); render ra view có layout
  res.render('news/tin_tuc');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

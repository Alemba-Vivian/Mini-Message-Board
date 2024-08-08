const express = require('express');
const app = express();

// app level Express middleware called express.urlencoded() to parse the form data into req.body
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));
//setting ejs engine;
app.set('view engine', 'ejs');


const messageRouter = require('./routes/index');



//using the routers
app.use('/', messageRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`App is running on localhost : ${PORT}`));
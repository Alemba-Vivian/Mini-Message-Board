const express = require('express');
const app = express();

const messageRouter = require('./routes/index');

app.use(express.static('public'));
//setting ejs engine;
app.set('view engine', 'ejs');

//using the routers
app.use('/', messageRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`App is running on localhost : ${PORT}`));
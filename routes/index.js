const express = require('express');
const messageRouter = express.Router();

const messages = [
   { text: "Hi there!", user: "Amando", added: new Date() },
   { text: "Nice to meet you!", user: "Charles",added: new Date()},
   { text: "Hello World!", user: "Charles",added: new Date()},
   { text: "Good morning", user: "Nekesa",added: new Date()},
   { text: "How are you", user: "Christine",added: new Date()},
   { text: "Hey!!!", user: "Joy",added: new Date()},
   { text: "Good Evening", user: "Sharon",added: new Date()},
   { text: "Hello you", user: "Kevin",added: new Date()},
 ];


messageRouter.get('/', (req, res)=>{
   res.render('message/index', {title: "Home"});
});

messageRouter.get('/messages', (req,res)=>{
   res.render('message/messages', {title: "Mini Message Board", posts: messages});
});

messageRouter.get('/new', (req,res)=>{
   res.render('message/form', {title: "New Message"});
});

messageRouter.post('/new', (req, res)=>{
   res.send("Create New Messages")
})

 
module.exports = messageRouter;
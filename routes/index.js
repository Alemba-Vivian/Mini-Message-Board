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
   const {author, messageText} =req.body;

   if(author && messageText){
      messages.push({text: messageText, user: author, added: new Date()});

      res.redirect('/messages');
   }else{
      res.status(400).send('All fields are required');
   }     
});

// Route to handle displaying a single message by its index
messageRouter.get('/messages/:id', (req, res)=>{
   const messageId = parseInt(req.params.id, 10);
   if(messageId >= 0 && messageId < messages.length){
      const message =messages[messageId];
      res.render('message/detail', {title: `Message from ${message.user}`, message});
   }else{
      res.status(404).send('Message not found')
   }
})
 
module.exports = messageRouter;
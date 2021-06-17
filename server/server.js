const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {postTask,getTasks,deleteTask} = require('./controllers/taskController');
const {isAuthorized, isLoggedIn} = require('./controllers/authController');

const PORT = 3333;

app.use(cookieParser())
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

app.options('*', cors()) // include before other routes


// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

// app.use(bodyParser.json())

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(express.static(path.resolve(__dirname,'../assets')));

app.get('/', (req,res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.resolve(__dirname,'../views/index.html'));
})

app.get('/secret',isLoggedIn,(req,res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.resolve(__dirname,'../views/secret.html'));
});

app.get('/getTasks',getTasks);

app.post('/addTasks',postTask);

app.post('/deleteTask',deleteTask);

app.post('/signin',isAuthorized);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;



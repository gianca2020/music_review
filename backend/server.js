import express from 'express';
import path from 'path';//line 2 and three are for portability of the code
import { fileURLToPath } from 'url';
//import path from 'path';
//import index.ejs from 'ejs';
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//this is the path to the views directory
//it gets request and response objects to render the index.ejs file
//set is used to set the views directory
app.set('views', path.join(__dirname, 'views')); //now the views directory is set to the 'views' folder in the current directory

//get is used to retrieve data from the server
app.get(`/`, (req, res) => {
  res.render(`index.ejs`, { name: `gianc` });
});

app.get('/login', (req, res) => {
  res.render('login.ejs');
});

app.get('/register', (req, res) => {
  res.render('register.ejs');
});

//post is used to send data to the server
app.post('/register', (req, res) => {
  req.body.email = req.body.email.toLowerCase();
  res.redirect('/login');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

//tomorrow look into storing user data in something like const users = [];
//11:07
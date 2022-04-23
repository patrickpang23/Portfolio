const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { default: isEmail } = require("validator/lib/isEmail");
const path = require('path')

const app = express();

let connection;

const db2 = mysql.createConnection({
    host: "us-cdbr-east-05.cleardb.net",
    user: "bc7af2508fc3a7",
    password:"56d886cd",
    database: "heroku_b5dcdb6dc0304cb"
  });
  

  app.use(bodyParser.json())
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded())


  app.get('/api/contact', (req, res) => {
      db2.query('SELECT * FROM contacts',
      (err, results) => {
        if (err) throw err;
        console.log(results);
        res.sendFile(__dirname = '/src/Contact.jsx');


    })
  })
      
app.post('/api/contact', (req,res) => {

  const name = req.body.name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;

    db2.query('INSERT INTO contacts (name,last_name,email,phone,message)VALUES(?,?,?,?,?)'
    ,[name,last_name,email,phone,message]),
    (err, result) => {
      console.log(err);
    }
})

app.use(express.static(path.join(__dirname, './build')));
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, './build', 'index.html'))
})
  
app.listen(process.env.PORT || 5001, function(){
  console.log(`Express is working on port 5001`)
});

function handleDisconnect() {
  connection = mysql.createConnection(db2); 

  connection.connect(function(err) {              
    if(err) {                                    
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); 
    }                                     
  });                                     
                                          
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();                         
    } else {                                      
      handleDisconnect();                                
      // throw err;                                  
    }
  });
}
handleDisconnect();
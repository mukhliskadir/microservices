const { Pool } = require('pg');
const express = require('express');
const cors = require('cors');
const path = require('path')


const app = express();
app.use(cors());
const pool = new Pool({
    user: 'hlcietwdsgkwyq',
    host: 'ec2-3-228-235-79.compute-1.amazonaws.com',
    database: 'ddrev47ip327l0',
    password: 'f6078446e3932c85a4d99b3753e1b04295a6add4a27ee4fdc3649c1efb1a04f1',
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    },
});

pool.on('error', (err, client) => {
    console.error('Error:', err);
});


app.get('/', (req, res) => {
  res.send('Masjid');
  console.log('Running');
});


const query = `
SELECT *
FROM donation
`;


app.get('/display', (req, res) => {
  var micro_username = req.query.username;

  console.log("username: " + micro_username);

  pool.connect(function (err, client) {
    if (err) { res.send('Error Database Connection'); }
    else {
      client.query(query, function (err, result) {
        if (err) { throw err; }
        else {
          res.send(result);
        }
      connection.release();
      });
    }
  });
});

app.listen(process.env.PORT ,() => {
  console.log('app listening ');
});

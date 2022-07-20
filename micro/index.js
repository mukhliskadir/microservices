const { Pool } = require('pg');
const express = require('express');
const cors = require('cors');
const path = require('path')


const app = express();
app.use(cors());
const pool = new Pool({
    user: 'dnzxqagexabepj',
    host: 'ec2-52-72-56-59.compute-1.amazonaws.com',
    database: 'd274lnoegak379',
    password: 'edb330e6fe55ed3bb6d1ee1eb3c1f995e6b205eb5d464bee634abc3345b2d294',
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
FROM staff
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

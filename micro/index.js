const { Pool } = require('pg');
const express = require('express');
const cors = require('cors');
const path = require('path')


const app = express();
app.use(cors());
const pool = new Pool({
    user: 'zaiaryvqbpwwcb',
    host: 'ec2-176-34-215-248.eu-west-1.compute.amazonaws.com',
    database: 'delu1t92658u0',
    password: '731fafeb016f84ea7f87300cbd19a24ba3e96adbaaf92504bc8d945d0302489b',
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
FROM participant
`;


app.get('/donation', (req, res) => {
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

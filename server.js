const express = require('express')
const app = express()
const bp = require('body-parser')

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));



app.listen(9000, function() {
  console.log('Listening on 9000');
});

module.exports = app;

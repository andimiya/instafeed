const express = require('express')
const app = express()
const bp = require('body-parser')

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.get('/api/instafeed', (req, res) => {
  res.send('success')
})

// function getPhotos() {
//   //return new Promise (resolve, reject)
//   //https.get( THE_ENDPOINT)
//     //res.on(data)
//       //store the rawData into a chunk
//     //res.on(end)
//       //resolve(THE_DATA_CHUNK_THING)
//   //if err
//     //reject(REASON_WHY)
// }

app.listen(9000, function () {
  console.log('Listening on 9000')
})

module.exports = app

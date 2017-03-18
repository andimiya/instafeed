const express = require('express')
const app = express()
const bp = require('body-parser')
const env = require('./.env')
const CLIENT_ID = process.env.CLIENT_ID
const ACCESS_TOKEN = process.env.ACCESS_TOKEN

let endpoint = `https://api.instagram.com/v1/users/${CLIENT_ID}/media/recent/?access_token=${ACCESS_TOKEN}`

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.get('/api/instafeed', (req, res) => {
  // call the getPhotos function
  res.send(getPhotos())
})

// if data.statusCode

function getPhotos () {
  console.log(endpoint)
  return endpoint
  // https.get(endpoint, (data) => {
  //   data.on('data',)
  //
  // })
  // res.on('data', (chunk) => {
  //
  // })
  // res.on('end', (req, res) => {
  //   console.log('end')
  // })
}

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

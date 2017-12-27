const bodyParser = require('body-parser')
const express = require('express')
const request = require('request')
const modifier = require('./slack/modifier')

const app = express()
const baseUrl = 'https://hooks.slack.com/'

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/**', (req, res) => {
  const body = { ...req.body }

  // GitHub integration
  if (req.headers['x-github-event'] !== undefined) modifier.github(body)

  // Send request to Slack Webhook
  request({ baseUrl, body, json: true, method: 'POST', url: req.path }).pipe(res)

  if (`${process.env.DEBUG}` === '1') console.log(body)
})

const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})

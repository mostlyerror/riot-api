const express = require('express')
const router = express.Router()
const request = require('request')

const api_key = '98b67977-fba4-4435-88a0-461acf65bb34'
const baseUrl = `https://na1.api.riotgames.com/lol/`

const urls = {
  summoner: {
    byName: (summonerName) => {
      return `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${summonerName}?api_key=${api_key}`
    }
  }
}

router.get('/', function(req, res, next) {
  res.render('index', { title: 'RiotApp' })
})

router.post('/summoner', function(req, res, next) {
  const summonerName = req.body['summoner-name']
  url = urls.summoner.byName(summonerName)
  request(url, {}, function (err, rs, body) {
    if (err) console.log(err)
    console.log(url)
    res.send(body)
  })
})

module.exports = router

const express = require('express')

const router = express.Router()

router.get('/cities', (req, res) => {
    const citiesData = 
    {
        "cities": [
          {
            "cityName": "Goundam",
            "country": "Mali",
            "emoji": "🇲🇱",
            "date": "2024-01-13T21:43:26.182Z",
            "notes": "",
            "position": {
              "lat": "17.820222415085563",
              "lng": "-4.746093750000001"
            },
            "id": 1
          },
          {
            "cityName": "Nyazbodzichy",
            "country": "Belarus",
            "emoji": "🇧🇾",
            "date": "2024-01-13T23:01:43.742Z",
            "notes": "",
            "position": {
              "lat": "52.9601325897212",
              "lng": "24.057471182845873"
            },
            "id": 3
          },
          {
            "cityName": "Tres Cantos",
            "country": "Spain",
            "emoji": "🇪🇸",
            "date": "2024-01-14T00:15:00.860Z",
            "notes": "",
            "position": {
              "lat": "40.613952441166596",
              "lng": "-3.7133789062500004"
            },
            "id": 6
          },
          {
            "cityName": "Wiazowna",
            "country": "Poland",
            "emoji": "🇵🇱",
            "date": "2024-01-14T01:00:42.876Z",
            "notes": "",
            "position": {
              "lat": "52.14737752789159",
              "lng": "21.29150390625"
            },
            "id": 8
          },
          {
            "cityName": "Paris",
            "country": "France",
            "emoji": "🇫🇷",
            "date": "2024-01-14T01:02:41.119Z",
            "notes": "I liked the place",
            "position": {
              "lat": "48.85032019783036",
              "lng": "2.3497009277343754"
            },
            "id": 9
          },
          {
            "cityName": "Bedminster",
            "country": "United States of America (the)",
            "emoji": "🇺🇸",
            "date": "2024-01-14T01:03:29.042Z",
            "notes": "",
            "position": {
              "lat": "40.68283171572881",
              "lng": "-74.68505859375001"
            },
            "id": 11
          },
          {
            "cityName": "Boston",
            "country": "United States of America (the)",
            "emoji": "🇺🇸",
            "date": "2024-01-22T03:31:14.813Z",
            "notes": "Boston is one of the top historic cities in the United States",
            "position": {
              "lat": "42.32606244456202",
              "lng": "-71.03759765625001"
            },
            "id": 12
          }
        ]

    }
    res.send(citiesData)
})

module.exports = router
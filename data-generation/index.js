const fs = require('fs')
const parse = require('csv-parse')
const jsonfile = require('jsonfile')

function longlat(ll) {
  return Number([ll.slice(0, 2), '.', ll.slice(2)].join(''))
}

fs.readFile('./bdd.csv', function (err, fileData) {
  parse(fileData, {columns: true, trim: true}, function(err, rows) {
    rows = rows
      .filter(({lat}) => lat !== '0000000' && lat !== '')
      .filter(({long}) => long !== '0000000' && long !== '')
      .filter(({gps}) => gps === 'M')
      .map(({an, mois, jour, ...item}) => Object.assign(item, {date: `${'20' + an}-${mois.length < 10 ? '0' + mois : mois}-${jour.length < 10 ? '0' + jour : jour}`}))
      .map(({lat, long, ...item}) => Object.assign(item, {lat: longlat(lat), long: longlat(long)}))
      .map(({lum, ...item}) => Object.assign(item, {luminosity: lum}))
      .map(({agg, ...item}) => Object.assign(item, {agglomeration: agg}))
      .map(({int, ...item}) => Object.assign(item, {intersection: int}))
      .map(({col, ...item}) => Object.assign(item, {collision: col}))
      .map(({atm, ...item}) => Object.assign(item, {meteo: atm}))
      .map(({hrmn, gps, com, Num_Acc, dep, adr, ...item}) => item)

    jsonfile.writeFile('./db.json', rows, function (err) {
      console.error('Generated', rows.length, 'rows !')
    })
  })
})

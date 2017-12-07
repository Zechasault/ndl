const fs = require('fs')
var parse = require('csv-parse')
var jsonfile = require('jsonfile')

function luminosity(lum) {
  switch (lum) {
    case '1': return 'Plein jour'
    case '2': return 'Crépuscule ou aube'
    case '3': return 'Nuit sans éclairage public'
    case '4': return 'Nuit avec éclairage public non allumé'
    case '5': return 'Nuit avec éclairage public allumé'
  }
}

function agglomeration(agg) {
  switch (agg) {
    case '1': return 'Hors agglomération'
    case '2': return 'En agglomération'
  }
}

function intersection(int) {
  switch (int) {
    case '1': return 'Hors intersection'
    case '2': return 'Intersection en X'
    case '3': return 'Intersection en T'
    case '4': return 'Intersection en Y'
    case '5': return 'Intersection à plus de 4 branches'
    case '6': return 'Giratoire'
    case '7': return 'Place'
    case '8': return 'Passage à niveau'
    case '9': return 'Autre intersection'
  }
}

function meteo(atm) {
  switch (atm) {
    case '1': return 'Normale'
    case '2': return 'Pluie légère'
    case '3': return 'Pluie forte'
    case '4': return 'Neige - grêle'
    case '5': return 'Brouillard - fumée'
    case '6': return 'Vent fort - tempête'
    case '7': return 'Temps éblouissant'
    case '8': return 'Temps couvert'
    case '9': return 'Autre'
  }
}

function collision(col) {
  switch (col) {
    case '1': return 'Deux véhicules (frontale)'
    case '2': return 'Deux véhicules (par l’arrière)'
    case '3': return 'Deux véhicules (par le coté)'
    case '4': return 'Trois véhicules et plus (en chaîne)'
    case '5': return 'Trois véhicules et plus (collisions multiples)'
    case '6': return 'Autre collision'
    case '7': return 'Sans collision'
  }
}

function longlat(ll) {
  return Number([ll.slice(0, 2), '.', ll.slice(2)].join(''))
}

fs.readFile('./bdd.csv', function (err, fileData) {
  parse(fileData, {columns: true, trim: true}, function(err, rows) {
    rows = rows
      .filter(({lat}) => lat !== '0000000' && lat !== '')
      .filter(({long}) => long !== '0000000' && long !== '')
      .filter(({gps}) => gps === 'M')
      .map(({an, mois, jour, ...item}) => Object.assign(item, {date: new Date('20' + an, mois, jour)}))
      .map(({lat, long, ...item}) => Object.assign(item, {lat: longlat(lat), long: longlat(long)}))
      .map(({lum, ...item}) => Object.assign(item, {luminosity: luminosity(lum)}))
      .map(({agg, ...item}) => Object.assign(item, {agglomeration: agglomeration(agg)}))
      .map(({int, ...item}) => Object.assign(item, {intersection: intersection(int)}))
      .map(({col, ...item}) => Object.assign(item, {collision: collision(col)}))
      .map(({atm, ...item}) => Object.assign(item, {meteo: meteo(atm)}))
      .map(({hrmn, gps, com, Num_Acc, dep, ...item}) => item)

    jsonfile.writeFile('./db.json', rows, function (err) {
      console.error(rows.length)
    })
  })
})

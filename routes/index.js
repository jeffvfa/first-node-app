var express = require('express');

var router = express.Router();
var mongoose = require('mongoose');
var Quote = require('../models/quote.js')
//var mongodb = require('../mongodb')

const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://root:example@db:27017', (err, client) => {
  if (err) return console.log(err);
  db = client.db('todo-list'); // whatever your database name is
  //app.listen(27017, () => {
    console.log('listening on 27017')
  //})
})


router.get('/', function(req, res, next) {
    db.collection('quotes').find().toArray(function(err, results) {
  console.log(results)
  // send HTML file populated with quotes here
  res.render('index.hbs', {quotes: results})
})

});

router.post('/todo', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')

  console.log('Hellooooooooooooooooo!');
})});
/*

router.post('/update', (req, res) => {
 console.log(req.body)
  res.render('update.hbs', {id: req.body})
  console.log('HellooooooooooWWoooo!');
});

router.post('/update2', (req, res) => {
    console.log(req.body.id)
    db.collection('quotes').findOneAndDelete({_id: req.body.id},
        {sort: {_id: -1}},
    (err, result) => {
      if (err) return res.send(500, err)
      //res.send({message: 'A darth vadar quote got deleted'})
    })

    db.collection('quotes').save({
        datain: req.body.datain,
        datali: req.body.datali,
        title: req.body.title,
        desc: req.body.desc,
        prior: req.body.prior
       }, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
})
})
/*
router.put('/quotes', (req, res) => {
  db.collection('quotes')
  .findOneAndUpdate({name: 'fnx'}, {
    $set: {
      name: req.body.name,
      quote: req.body.quote
    }
  }, {
    sort: {_id: -1}
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})
*/

router.delete('/quotes', (req, res) => {
  console.log("táaqui")
  db.collection('quotes').findOneAndDelete({'title': /.*/},
      {sort: {_id: -1}},
  (err, result) => {
    if (err) return res.send(500, err);
    res.send({message: 'A darth vadar quote got deleted'})
  })
})

module.exports = router;

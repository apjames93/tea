var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('tea_table').select().then(function (tea){
    res.render('index', {list: tea, title: 'Look at the Tea'});
})
});

router.get('/create', function(req, res, next){
  res.render('create',{title: 'Add your favorite tea here!'});
});

router.get('/:id/edit', function(req, res,next){
  knex('tea_table').where({id: req.params.id}).first().then(function (tea){
    res.render('edit', {tea: tea})
  })
})

router.post('/:id/edit', function(req, res,next){
 knex('tea_table').where({id: req.params.id}).update(req.body).then(function (){
   res.redirect('/' + req.params.id)
 })
})

router.get('/:id/delete', function(req, res, next){
  knex('tea_table').where({id: req.params.id}).del().then(function(){
    res.redirect('/');
  })
})

router.get('/:id', function(req, res, next){
  knex('tea_table').where({id: req.params.id}).first().then(function(tea){
    res.render('detail', {tea: tea})
  })
})

router.post('/create', function(req, res, next){
  knex('tea_table').insert(req.body).then(function(){
    res.redirect('/');
  }).catch( function(error){
    console.log(error);
  })
})

module.exports = router;

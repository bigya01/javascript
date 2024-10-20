var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , description : 'test description'});
});
router.get('/mytest', function(req, res, next) {
  const books =[{
    name : 'book 1',
    title :'palpasa'
  }]
  res.render('test_view', {books: books});
});
router.get('/redirect-test', function(req, res, next) {
  res.redirect('/mytest');
});



module.exports = router;

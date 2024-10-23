


var express = require('express');
var router = express.Router();

const Book =require('../models/book');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const books =[
    {
    _id: 1,
    name : 'author 1',
    title :'palpasa',
    description : 'nice book to read for you '

  },
  {
    _id: 2,
    name : 'author 2',
    title :'seto dharti',
    description : 'nice book to read for you '
  },
  {
    _id: 3,
    name : 'author 3',
    title :'raktakunda',
    description : 'nice book to read for you '

  },
]
  try{
    const books =await Book.find();
    res.render('index', { title: 'title', bookList: books });
  }
  catch(error){
    console.log(error)
    return null
  }

 
});


router.get('/mytest', function(req, res, next) {
  const book =[
    {
    _id: 1,
    name : 'author 1',
    title :'palpasa'
  },
  {
    _id: 2,
    name : 'author 2',
    title :'seto dharti'
  },
  {
    _id: 3,
    name : 'author 3',
    title :'raktakunda'
  },
]
  res.render('test_view', {books: book});
});

router.get('/add-books', function(req, res, next) {
  res.render('add-books');
});

router.post('/save', async function(req,res,next){
  
  try{
    const newBook = new Book(req.body);
    await newBook.save();
    console.log("BOok saved", newBook)
  }
  catch(error){
    console.log(error);
  }
  res.redirect("/");
});

router.post('/delete/:id', async function(req,res,next){
  
  try{
    const bookId = req.params.id;

    await Book.findByIdAndDelete(bookId);
  }
  catch(error){
    console.log(error);
  }
  res.redirect("/");
});

router.get('/edit/:id', async function(req,res,next){
  
  try{
    const bookId = req.params.id;
    const addedbook=await Book.findById(bookId);
    console.log("Book ID:", bookId);
    res.render('edit-books',{addedbook});
  }
  catch(error){
    console.log(error);
  }
  // res.redirect("/");
});

router.post('/update/:id', async function(req, res, next) {
  try {
    const bookId = req.params.id;
    const updatedData = req.body; // Get the updated data from the form
    await Book.findByIdAndUpdate(bookId, updatedData, { new: true }); // Update the book
    res.redirect("/"); // Redirect to the home page after updating
  } catch (err) {
    console.log(err);
    res.status(500).send("Error updating book.");
  }
});





router.get('/test123', function(req, res, next) {
  res.render('test123',{name : "binduu the great"});
});

router.get('/redirect-test', function(req, res, next) {
  res.redirect('/mytest');
});



module.exports = router;

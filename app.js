var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gooogleRouter = require('./routes/gooogle');
var addmodsRouter=require('./routes/addmods');
var selectorRouter=require('./routes/selector');
var gooogle = require('./models/gooogle');
var resourceRouter=require('./routes/resource');
var detail=require('./routes/detail');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// We can seed the collection if needed on server start
async function recreateDB(){
 // Delete everything
 await gooogle.deleteMany();

 let instance1 = new
gooogle({gooogle_itemname:book, gooogle_quantity:"2",
gooogle_price:130});
 instance1.save( function(err,doc) {
 if(err) return console.error(err);
 console.log("First object saved")
 });

let instance2 = new
gooogle({gooogle_itemname:pen, gooogle_quantity:"2",
gooogle_price:40});
 instance2.save( function(err,doc) {
 if(err) return console.error(err);
 console.log("Second object saved")
 });

 let instance3 = new
gooogle({gooogle_itemname:scale, gooogle_quantity:"5",
gooogle_price:12});
 instance3.save( function(err,doc) {
 if(err) return console.error(err);
 console.log("Third object saved")
 });

}

// List of all Costumes


let reseed = true;
if (reseed) { recreateDB();}

// We can seed the collection if needed on server start
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/gooogle',gooogleRouter);
app.use('/addmods',addmodsRouter);
app.use('/selector',selectorRouter);
app.use('/resource',resourceRouter);
app.use('/gooogle/detail',detail);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
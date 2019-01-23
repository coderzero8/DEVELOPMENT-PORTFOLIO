var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var mongoose = require('mongoose');
var db = mongoose.connection;


//var data = [{item:'get milk'},{item:"walk dog"},{item:"kick some coding ass"}]
var mydata =[];
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){

    //load page start
    app.get('/',function(req,res){


        res.render('welcomepage');


    });

    app.post('/todo',urlencodedParser,function(req,res){

    });
};

//database using mlab

var express = require('express');
var app = express();
var request = require('request');
app.set('view-engine', 'ejs');
app.use(express.static('ressources'));


var cityList = [];



app.get('/', function (req, res) {
  res.render('index.ejs', { list : cityList});
});


//app.get('/updatesort', function (req, res){
//	console.log(req.query.sort);
//	console.log(req.query.sort[0]);

//	res.render('index.ejs', {list : cityList});

//});

app.get('/add', function (req, res) {
		request("http://api.openweathermap.org/data/2.5/weather?q="+req.query.city+"&APPID=520cdabdb3137de87e4675abdc7a738e&units=metric&lang=fr", function(error, response, body){
			body = JSON.parse(body);

				console.log(body);

		    if(body.main.temp_min != undefined) {
		      req.query.city = body.name;
		      req.query.temp_min = body.main.temp_min;
		      req.query.temp_max = body.main.temp_max;
		      req.query.icon = body.weather[0].icon;
		      req.query.description = body.weather[0].description;

   				console.log(body.main.city);


      cityList.push(req.query);
    } 

    res.render('index.ejs', { list : cityList });
  
  });

});


app.get('/delete', function (req, res){
		console.log(req, res);
	cityList.splice(req.query.position, 1);
	 res.render('index.ejs', { list : cityList });

});

app.listen(8080, function(){
	console.log("server listening on port 8080")
});


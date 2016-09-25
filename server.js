var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
	'articleOne' : {
		title: "Article One | Rohan Sonawane",
		heading: "Article One.....",	
	},
	'articleTwo' : {
		title: "Article Two | Rohan Sonawane",
		heading: "Article Two.....",
	},
	'articleThree' : {
		title: "Article Three | Rohan Sonawane",
		heading: "Article Three.....",
	}
};



function createTemplate(data){
	var title = data.title;
	var heading = data.heading;

	var htmlTemplate = `
	<!doctype html>
	<html>
	    <head>
	        <title>
	        	${title}
	        </title>
	        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
	    </head>
	    <body>
	    	<div>
	    		<a href="/">HOME</a>
	    	</div>
	    	<hr/>
	    	<h3>
	    		${heading}
	    	</h3>
	    </body>
	</html>
	`;

	return htmlTemplate;

}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/enfield.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'enfield.jpg'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/:articleName', function(req, res){	
	var articleName = req.params.articleName;
	res.send(createTemplate(articles[articleName]));
});


var port = 8083; // Use 8080 for local development because you might already have apache running on 80
app.listen(8083, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

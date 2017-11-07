var express = require('express')
var app = express();
var PythonShell = require('python-shell');
var path = require('path');

var options = {
	pythonPath: "python3"
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
	res.render('index');
});

app.get('/BreastPalpation/tutorial', function(req,res){
	res.render('BPTutorial');
});

app.get('/runsimulation', function(req,res){
	res.render('home');
	PythonShell.run('run_simulator.py', options, function(err, res){
		if (err){
			throw err;
		}
		return;
	});
});

app.listen(3000, function(err){
	if(err){
		throw err;
	}
	else{
		console.log("Server running on port 3000!");
	}
})
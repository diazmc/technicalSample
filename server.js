var express = require('express')
var app = express()
var bodyParser = require('body-parser')


app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('index');
})

app.post('/test', function(req, res) {
  var str = req.body.string_to_cut;
  var newStr = '';
  
  for (var i = 0; i < str.length; i++) {
    if ((i + 1) % 3 === 0) {
      newStr += str[i];
    }
  }

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ 'return_string' : newStr}));

  console.log(str);
  console.log(newStr);
})

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});
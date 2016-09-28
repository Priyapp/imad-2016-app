var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var big1 ={
    title :'Thing Big | Pp',
    date :'Sep 28, 2016',
    Content:`<p>
If you want to suceed, start doing it now!!
</p>`
};


function createTemplate(data){
    var title = data.title;
    var date
}

var htmltemplate =`<html>

<head>
<link  href="/ui/style.css" rel="stylesheet" />
<title>
${title}
</title>
 <meta name="viewport" content="width=device-width, initial-scale=1" />
 <style>
 }
 </style>
 </head>
 <body>
     <div class="container">
<div>
<a href="/">Home</a>
</div>
<hr/>
<div class="date">
   ${date}
    </div>
<div>
${content}
</div>
</div>
</body>
</html>`;


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/images.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'images.jpg'));
});


app.get('/big1', function (req, res) {
     res.sendFile(path.join(__dirname, 'ui', 'big1.html'));
});

app.get('/big2', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'big2.html'));
});

app.get('/big3', function (req, res) {
     res.sendFile(path.join(__dirname, 'ui', 'big3.html'));
 
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

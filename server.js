var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    big1:{ 
    title :'Thing Big | Pp',
    date :'Sep 28, 2016',
    Content:`<p>
            If you want to suceed, start doing it now!!
            </p>`
            },
    big2 :{
    title :'Thing Big | Pp',
    date :'Sep 28, 2016',
    Content:`<p>
if u do same thing always, u will always be the same person as u today, 
if u want to achieve something, start doing different things right now.
</p>` 
        },
        
    big3 :
    {
    title :'Thing Big | Pp',
    date :'Sep 28, 2016',
    Content:`<p>
Do what u love, love what u do...
</p>`
    }
    
};
// var big1 ={
//     title :'Thing Big | Pp',
//     date :'Sep 28, 2016',
//     Content:`<p>
// If you want to suceed, start doing it now!!
// </p>`
// };

// var big2 ={
//     title :'Thing Big | Pp',
//     date :'Sep 28, 2016',
//     Content:`<p>
// if u do same thing always, u will always be the same person as u today, 
// if u want to achieve something, start doing different things right now.
// </p>`
// };

// var big3 ={
//     title :'Thing Big | Pp',
//     date :'Sep 28, 2016',
//     Content:`<p>
// Do what u love, love what u do...
// </p>`
// };

function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var content= data.Content;


var htmltemplate =`<html>

<head>
<link  href="/ui/style.css" rel="stylesheet" />
<title>
${title}
</title>
 <meta name="viewport" content="width=device-width, initial-scale=1" />
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
return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/page1.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'page1.html'));
});
app.get('/ui/P.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'P.jpg'));
});

app.get('/ui/backg1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'backg1.jpg'));
});

app.get('/ui/top-animate.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'top-animate.png'));
});
app.get('/ui/backtotop.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'backtotop.js'));
});

// app.get('/big1', function (req, res) {
//     res.send(createTemplate(big1));
    
//     // res.sendFile(path.join(__dirname, 'ui', 'big1.html'));
// });

app.get('/:articlesName', function(req,res){
  
  var articlesName=req.params.articlesName;
  res.send(createTemplate(articles[articlesName]));
});

// app.get('/big2', function (req, res) {
//     res.send(createTemplate(big2));
// //  res.sendFile(path.join(__dirname, 'ui', 'big2.html'));
// });

// app.get('/big3', function (req, res) {
//     //  res.sendFile(path.join(__dirname, 'ui', 'big3.html'));
//     res.send(createTemplate(big3));
 
// });

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

const express = require('express'),
      app = express()
;

app.use(express.static('public'));
app.set('view engine', 'pug')

app.get("/", function (request, response) {
  response.render('index');
});


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

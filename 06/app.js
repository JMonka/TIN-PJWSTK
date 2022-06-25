const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
   res.send('Hello World!')
})

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/form', function (req, res) {
   res.sendFile('index.html', { root: __dirname });
});

app.post('/formdata', function (req, res) {
   var name = req.body.firstName + ' ' + req.body.middleName + ' ' + req.body.lastName;

   res.send(name + ' Submitted Successfully!');
});


app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})
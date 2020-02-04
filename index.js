const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Home')
})

app.get('/about-us', function (req, res) {
  res.send('About Us Page')
})
 
app.listen(3000,function(){
	console.log('Server running on port 3000')
})

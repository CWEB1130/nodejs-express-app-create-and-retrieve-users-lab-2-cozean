var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  let userData = fs.readFileSync('./users.json');
  var siteUsers = JSON.parse(userData);

  //Assigning the parsed array of objects read-in from users.json to a variable called createdUsers
  var createdUsers = siteUsers;
  res.render('users', {createdUsers});
});

module.exports = router;

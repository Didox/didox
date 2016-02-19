var Test = require("../models/test")

var HomeController = {
  index: function(request, response) {
    response.render('home/index');
  },
  create: function(request, response) {
  	Test.createTable(function(rows,err){
		if(err) response.send("erro ao atualizar :"+ err.message ,500);
		else response.send('created', 200);
  	});
  },
  insert: function(request, response) {
  	Test.insert(function(rows,err){
		if(err) response.send("erro ao atualizar :"+ err.message ,500);
		else response.send('inserted', 200);
  	});
  },
  select: function(request, response) {
  	Test.select(function(rows,err){
		if(err) response.send("erro ao atualizar :"+ err.message ,500);
		else response.send(rows, 200);
  	});
  }
}

module.exports = HomeController;
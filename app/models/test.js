require("../../config/db")

Test=function(){}

Test.createTable=function(callback){
	var query = "";
	query += "CREATE TABLE test (";
	query += "	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,";
	query += "	nome VARCHAR(30) NOT NULL";
	query += ")";
	db.cnn.exec(query,callback);
}

Test.insert=function(callback){
	var query = "";
	query += "insert into test(nome)values('teste')";
	db.cnn.exec(query,callback);
}

Test.select=function(callback){
	var query = "";
	query += "select * from test";
	db.cnn.exec(query,callback);
}


module.exports=Test;

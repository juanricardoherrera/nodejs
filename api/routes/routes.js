'use strict';
module.exports = function(app){
	
	 // todoList Routes
  	app.route('/greetings').get((req, res) =>{
  		res.json({Name:'Prueba'});
  	});
}
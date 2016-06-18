var models = require('../models/model.js');

exports.registroContacto = function (req, res){
	var agenda = models.Contacto.build({ nombres: "Nombre",
									post: "post",
									});

	res.render('registroContacto', {titulo:'Registro de Contacto', agenda: agenda});
}

exports.respuestaContacto = function (req, res){
	res.render('respuestaContacto', {mensaje:'Se registro el contacto'});
}

exports.guardarContacto = function(req, res){
	console.log("ingresa a guardar");
	var contacto = models.Contacto.build (req.body.contacto);
    //a continuacion guardamos los campos que recibimos del formulario
    contacto.save	({fields:["nombres",
    					  "post"
    					 
    					  ]
    			 }).then(function(){
    			 	console.log("ingresa a redirecr");
    			 	res.render('respuestaContacto', {mensaje:'Post recibido'});
    			 });  	
}



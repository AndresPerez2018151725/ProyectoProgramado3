var TotalPyA = 0;
var listaOrnamentales = new Array();
var listaAromaticas = new Array();
var listaMedicinales = new Array();
var listaArboles = new Array();
var propiedadesAromaticas = new Array();
var temporadaArboles = new Array();
var Imagen = document.getElementById("output");
var code = document.getElementById('codigo');
var names = document.getElementById('nombre');
var altura = document.getElementById('altura');
var price = document.getElementById('precio');
var propiedade = document.getElementById('propiedades');
var tempo = document.getElementById('temporada');
//var imagenOrnamental = getElementById("Insertar nombre de la imagen aca");
//INSERTAR LAS IMAGENES QUE FALTAN
// NO SE SI USAMOS ARRAYS O CON LINKED LISTS, COMO QUIERAN 

//OBJETOS
function Planta(codigo, nombre, alturaMax, precioVenta, imagen) {
	this.codigo = codigo;
	this.nombre = nombre;
	this.alturaMax = alturaMax;
	this.precioVenta = precioVenta;
	this.imagen = new Image(70, 70);
	this.imagen.src = Imagen;
}

Planta.prototype = {
	constructor: Planta,
	getCodigo: function () {
		return this.codigo;
	},
	getNombre: function () {
		return this.nombre;
	},
	getAlturaMax: function () {
		return this.alturaMax;
	},
	getPrecioVenta: function () {
		return this.precioVenta;
	},
	getImagen: function () {
		return Imagen;
	}
};

function PlantaOrnamental(codigo, nombre, alturaMax, precioVenta, imagen) {
	Planta.call(this, codigo, nombre, alturaMax, precioVenta, imagen);
};

PlantaOrnamental.prototype = Object.create(Planta.prototype, {
	constructor: {
		configurable: true,
		enumerable: true,
		value: PlantaOrnamental,
		writable: true
	}
});


function registrarPlantaOrnamental(codigo, nombre, alturaMax, precioVenta, imagen) {
	var plantaOrnamental = new PlantaOrnamental(codigo, nombre, alturaMax, precioVenta, imagen);
	listaOrnamentales.push(plantaOrnamental);
};

function registrarPlantaOrnamentalHTML() {
	var plantaOrnamental = new PlantaOrnamental(code, names, altura, price, null);
	listaOrnamentales.push(plantaOrnamental);
};

function PlantaAromatica(codigo, nombre, alturaMax, precioVenta, imagen, propiedadesAromaticas) {
	Planta.call(this, codigo, nombre, alturaMax, precioVenta, imagen);
	this.propiedadesAromaticas = propiedadesAromaticas;
};

PlantaAromatica.prototype = Object.create(Planta.prototype, {
	constructor: {
		configurable: true,
		enumerable: true,
		value: PlantaAromatica,
		writable: true
	}
});

///FALTA AGARRAR LOS DATOS DEL HTML Y TAMBIÉN AGARRAR EN UN ARRAY LAS PROPIEDADES AROMÁTICAS

function registrarPlantaAromatica(codigo, nombre, alturaMax, precioVenta, imagen, propiedadesAromaticas) {
	var plantaAromatica = new PlantaAromatica(codigo, nombre, alturaMax, precioVenta, imagen, propiedadesAromaticas);
	listaAromaticas.push(plantaAromatica);
};


function PlantaMedicinal(codigo, nombre, alturaMax, precioVenta, imagen, propiedadesMedicinales) {
	Planta.call(this, codigo, nombre, alturaMax, precioVenta, imagen);
	this.propiedadesMedicinales = propiedadesMedicinales;
};

PlantaMedicinal.prototype = Object.create(Planta.prototype, {
	constructor: {
		configurable: true,
		enumerable: true,
		value: PlantaMedicinal,
		writable: true
	}
});

///FALTA AGARRAR LOS DATOS DEL HTML Y TAMBIÉN AGARRAR EN UN ARRAY LAS PROPIEDADES MEDICINALES
function registrarPlantaMedicinal(codigo, nombre, alturaMax, precioVenta, imagen, propiedadesMedicinales) {
	var plantaMedicinal = new PlantaMedicinal(codigo, nombre, alturaMax, precioVenta, imagen, propiedadesMedicinales);
	listaMedicinales.push(plantaMedicinal);
};


function ArbolFrutal(codigo, nombre, alturaMax, precioVenta, imagen, temporada) {
	Planta.call(this, codigo, nombre, alturaMax, precioVenta, imagen);
	this.temporada = temporada;
};

ArbolFrutal.prototype = Object.create(Planta.prototype, {
	constructor: {
		configurable: true,
		enumerable: true,
		value: ArbolFrutal,
		writable: true
	}
});

///FALTA AGARRAR LOS DATOS DEL HTML Y TAMBIÉN AGARRAR EN UN ARRAY LAS TEMPORADAS
function registrarArbolFrutal(codigo, nombre, alturaMax, precioVenta, imagen, temporada) {
	var arbolFrutal = new ArbolFrutal(codigo, nombre, alturaMax, precioVenta, imagen, temporada);
	listaArboles.push(arbolFrutal);
};


function buscarPorNombre(nombre) {
	var resultado = new Array();
	for (i = 0; i < listaArboles.length; i++) {
		if (listaArboles[i].nombre == nombre) {
			resultado.push(listaArboles[i].getCodigo());
			resultado.push(listaArboles[i].getNombre());
			resultado.push(listaArboles[i].getAlturaMax());
			resultado.push(listaArboles[i].getPrecioVenta());
			resultado.push(listaArboles[i].temporada);
		}
	}
	for (i = 0; i < listaAromaticas.length; i++) {
		if (listaAromaticas[i].nombre == nombre) {
			resultado.push(listaAromaticas[i].getCodigo());
			resultado.push(listaAromaticas[i].getNombre());
			resultado.push(listaAromaticas[i].getAlturaMax());
			resultado.push(listaAromaticas[i].getPrecioVenta());
			resultado.push(listaAromaticas[i].propiedadesAromaticas);
		}
	}
	for (i = 0; i < listaMedicinales.length; i++) {
		if (listaMedicinales[i].nombre == nombre) {
			resultado.push(listaMedicinales[i].getCodigo());
			resultado.push(listaMedicinales[i].getNombre());
			resultado.push(listaMedicinales[i].getAlturaMax());
			resultado.push(listaMedicinales[i].getPrecioVenta());
			resultado.push(listaMedicinales[i].propiedadesMedicinales);
		}
	}
	for (i = 0; i < listaOrnamentales.length; i++) {
		if (listaOrnamentales[i].nombre == nombre) {
			resultado.push(listaOrnamentales[i].getCodigo());
			resultado.push(listaOrnamentales[i].getNombre());
			resultado.push(listaOrnamentales[i].getAlturaMax());
			resultado.push(listaOrnamentales[i].getPrecioVenta());
		}
	}
	return resultado;
};

function buscarPorTemporada(temporada) {
	var resultado = new Array();
	for (i = 0; i < listaArboles.length; i++) {
		if (listaArboles[i].temporada == temporada) {
			resultado.push(listaArboles[i].getCodigo());
			resultado.push(listaArboles[i].getNombre());
			resultado.push(listaArboles[i].getAlturaMax());
			resultado.push(listaArboles[i].getPrecioVenta());
			resultado.push(listaArboles[i].temporada);
		}
	}
	return resultado;
};

function buscarPorPrecio(precio) {
	var resultado = new Array();
	for (i = 0; i < listaArboles.length; i++) {
		if (listaArboles[i].precioVenta == precio) {
			resultado.push(listaArboles[i].getCodigo());
			resultado.push(listaArboles[i].getNombre());
			resultado.push(listaArboles[i].getAlturaMax());
			resultado.push(listaArboles[i].getPrecioVenta());
			resultado.push(listaArboles[i].temporada);
		}
	}
	for (i = 0; i < listaAromaticas.length; i++) {
		if (listaAromaticas[i].precioVenta == precio) {
			resultado.push(listaAromaticas[i].getCodigo());
			resultado.push(listaAromaticas[i].getNombre());
			resultado.push(listaAromaticas[i].getAlturaMax());
			resultado.push(listaAromaticas[i].getPrecioVenta());
			resultado.push(listaAromaticas[i].propiedadesAromaticas);
		}
	}
	for (i = 0; i < listaMedicinales.length; i++) {
		if (listaMedicinales[i].precioVenta == precio) {
			resultado.push(listaMedicinales[i].getCodigo());
			resultado.push(listaMedicinales[i].getNombre());
			resultado.push(listaMedicinales[i].getAlturaMax());
			resultado.push(listaMedicinales[i].getPrecioVenta());
			resultado.push(listaMedicinales[i].propiedadesMedicinales);
		}
	}
	for (i = 0; i < listaOrnamentales.length; i++) {
		if (listaOrnamentales[i].precioVenta == precio) {
			resultado.push(listaOrnamentales[i].getCodigo());
			resultado.push(listaOrnamentales[i].getNombre());
			resultado.push(listaOrnamentales[i].getAlturaMax());
			resultado.push(listaOrnamentales[i].getPrecioVenta());
		}
	}
	return resultado;
};

function buscarPorPropiedades(propiedades) {
	var resultado = new Array();
	for (i = 0; i < listaAromaticas.length; i++) {
		if (listaAromaticas[i].propiedadesAromaticas == propiedades) {
			resultado.push(listaAromaticas[i].getCodigo());
			resultado.push(listaAromaticas[i].getNombre());
			resultado.push(listaAromaticas[i].getAlturaMax());
			resultado.push(listaAromaticas[i].getPrecioVenta());
			resultado.push(listaAromaticas[i].propiedadesAromaticas);
		}
	}
	for (i = 0; i < listaMedicinales.length; i++) {
		if (listaMedicinales[i].propiedadesMedicinales == propiedades) {
			resultado.push(listaMedicinales[i].getCodigo());
			resultado.push(listaMedicinales[i].getNombre());
			resultado.push(listaMedicinales[i].getAlturaMax());
			resultado.push(listaMedicinales[i].getPrecioVenta());
			resultado.push(listaMedicinales[i].propiedadesMedicinales);
		}
	}
	return resultado;
};

function verPlantas() {
	var resultado = new Array();
	for (i = 0; i < listaArboles.length; i++) {
		resultado.push(listaArboles[i].nombre);
		resultado.push(listaArboles[i].imagen);
	}
	for (i = 0; i < listaAromaticas.length; i++) {
		resultado.push(listaAromaticas[i].nombre);
		resultado.push(listaAromaticas[i].imagen);
	}
	for (i = 0; i < listaMedicinales.length; i++) {
		resultado.push(listaMedicinales[i].nombre);
		resultado.push(listaMedicinales[i].imagen);
	}
	for (i = 0; i < listaOrnamentales.length; i++) {
		resultado.push(listaOrnamentales[i].nombre);
		resultado.push(listaOrnamentales[i].imagen);
	}
	return resultado;
};

function verPlantasNombres() {
	var resultado = new Array();
	for (i = 0; i < listaArboles.length; i++) {
		resultado.push(listaArboles[i].nombre);
	}
	for (i = 0; i < listaAromaticas.length; i++) {
		resultado.push(listaAromaticas[i].nombre);
	}
	for (i = 0; i < listaMedicinales.length; i++) {
		resultado.push(listaMedicinales[i].nombre);
	}
	for (i = 0; i < listaOrnamentales.length; i++) {
		resultado.push(listaOrnamentales[i].nombre);
	}
	return resultado;

};

function verPlantasImagen() {
	var resultado = new Array();
	for (i = 0; i < listaArboles.length; i++) {
		resultado.push(listaArboles[i].imagen);
	}
	for (i = 0; i < listaAromaticas.length; i++) {
		resultado.push(listaAromaticas[i].imagen);
	}
	for (i = 0; i < listaMedicinales.length; i++) {
		resultado.push(listaMedicinales[i].imagen);
	}
	for (i = 0; i < listaOrnamentales.length; i++) {
		resultado.push(listaOrnamentales[i].imagen);
	}
	return resultado;
};

function validarComboBox() {
	var comboBoxSelected = document.getElementById("filtros");
	console.log(comboBoxSelected);
};


//////////////////////////////// Creación de plantas y árboles ////////////////////////////////////////////////


registrarPlantaAromatica(1, "Clavel", "10 cm", 400, null, "Olor suave");
registrarPlantaAromatica(2, "Rosa", "5 cm", 350, null, "Olor dulce");
registrarPlantaMedicinal(1, "Rama", "20 cm", 100, null, "Alivia el dolor estomacal");
registrarPlantaMedicinal(2, "Tomol", "15 cm", 100, null, "Alivia el dolor de cabeza");
registrarPlantaOrnamental(1, "Ortencia", "35 cm", 170, null);
registrarPlantaOrnamental(2, "Floripondio", "23 cm", 300, null);
registrarArbolFrutal(1, "Limonero", "1,20 cm", 500, "yup.png", "primavera");
registrarArbolFrutal(2, "Manzano", "2,10 cm", 750, null, "verano");

console.log(buscarPorPrecio(100).length); 
console.log(verPlantas());
console.log(verPlantasImagen());
console.log(verPlantasNombres());
var parametro = "Manzano";
var contadora=0;
var choice = new Array();
choice.push(buscarPorNombre(parametro)[contadora]);
choice.push(buscarPorNombre(parametro)[1]);
choice.push(buscarPorNombre(parametro)[2]);
choice.push(buscarPorNombre(parametro)[3]);
choice.push(buscarPorNombre(parametro)[4]);
choice.push(buscarPorNombre(parametro)[5]);
choice.push(buscarPorNombre(parametro)[6]);
//choice.push(buscarPorNombre(parametro)[contadora]);
console.log(choice[6]);
var TotalPyA = 0;
var listaOrnamentales = new Array();
var listaAromaticas = new Array();
var listaMedicinales = new Array();
var listaArboles = new Array();
var propiedadesAromaticas = new Array();
var temporadaArboles = new Array();
//var imagenOrnamental = getElementById("Insertar nombre de la imagen aca");
//INSERTAR LAS IMAGENES QUE FALTAN
// NO SE SI USAMOS ARRAYS O CON LINKED LISTS, COMO QUIERAN 

//OBJETOS
function Planta(codigo, nombre, alturaMax, precioVenta, imagen) {
	this.codigo = codigo;
	this.nombre = nombre;
	this.alturaMax = alturaMax;
	this.precioVenta = precioVenta;
	this.imagen = imagen;
}

Planta.prototype = {
	constructor:Planta,
	getCodigo: function(){
		return this.codigo;
	},
	getNombre: function(){
		return this.nombre;
	},
	getAlturaMax: function(){
		return this.alturaMax;
	},
	getPrecioVenta: function(){
		return this.precioVenta;
	},
	getImagen: function(){
		return this.imagen;
	}
};

function PlantaOrnamental(codigo, nombre, alturaMax, precioVenta, imagen) {
	Planta.call(this, codigo,nombre,alturaMax,precioVenta,imagen);
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


function PlantaAromatica(codigo, nombre, alturaMax, precioVenta, imagen, propiedadesAromaticas) {
	Planta.call(this, codigo,nombre,alturaMax,precioVenta,imagen);
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
	Planta.call(this, codigo,nombre,alturaMax,precioVenta,imagen);
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
	Planta.call(this, codigo,nombre,alturaMax,precioVenta,imagen);
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


/*
//LINKED LIST, SE PUEDE USAR O NO 
function LinkedList() {
	this.head = null;
	this.tail = null;
}
function NodeLinked(value, next, prev) {
	this.value = value;
	this.next = next;
	this.prev = prev;
}


LinkedList.prototype.InsertHead = function (value) {
	const newNodo = new NodeLinked(value, this.head, null);
	if (this.head) this.head.prev = newNodo;
	else this.tail = newNodo;
	this.head = newNodo;
};


LinkedList.prototype.InsertTail = function (vaule) {
	const newNodo = new NodeLinked(value, null, this.tail);
	if (this.tail) this.tail.next = newNodo;
	else this.head = newNodo;
	this.tail = newNodo;
}

LinkedList.prototype.search = function (buscar) {
	let current = this.head;
	while (current) {
		if (current.value === buscar) return current;
		current = current.next;
	}
	return null;
}
*/
function buscarPorNombre(nombre) {
	var resultado = new Array();
	for (i = 0; i < listaArboles.length; i++) {
		if (listaArboles[i].nombre == nombre) {
			resultado.push(listaArboles[i]);
			break;
		}
	}
	for (i = 0; i < listaAromaticas.length; i++) {
		if (listaAromaticas[i].nombre == nombre) {
			resultado.push(listaAromaticas[i]);
			break;
		}
	}
	for (i = 0; i < listaMedicinales.length; i++) {
		if (listaMedicinales[i].nombre == nombre) {
			resultado.push(listaMedicinales[i]);
			break;
		}
	}
	for (i = 0; i < listaOrnamentales.length; i++) {
		if (listaOrnamentales[i].nombre == nombre) {
			resultado.push(listaOrnamentales[i]);
			break;
		}
	}
	return resultado;
};

function buscarPorTemporada(temporada) {
	var resultado = new Array();
	for (i = 0; i < listaArboles.length; i++) {
		if (listaArboles[i].temporada == temporada) {
			resultado.push(listaArboles[i]);
			break;
		}
	}
	return resultado;
};

function buscarPorPrecio(precio) {
	var resultado = new Array();
	for (i = 0; i < listaArboles.length; i++) {
		if (listaArboles[i].precioVenta == precio) {
			resultado.push(listaArboles[i]);
			break;
		}
	}
	for (i = 0; i < listaAromaticas.length; i++) {
		if (listaAromaticas[i].precioVenta == precio) {
			resultado.push(listaAromaticas[i]);
			break;
		}
	}
	for (i = 0; i < listaMedicinales.length; i++) {
		if (listaMedicinales[i].precioVenta == precio) {
			resultado.push(listaMedicinales[i]);
			break;
		}
	}
	for (i = 0; i < listaOrnamentales.length; i++) {
		if (listaOrnamentales[i].precioVenta == precio) {
			resultado.push(listaOrnamentales[i]);
			break;
		}
	}
	return resultado;
};

function buscarPorPropiedades(propiedades) {
	var resultado = new Array();
	for (i = 0; i < listaAromaticas.length; i++) {
		if (listaAromaticas[i].propiedadesAromaticas == propiedades) {
			resultado.push(listaAromaticas[i]);
			break;
		}
	}
	for (i = 0; i < listaMedicinales.length; i++) {
		if (listaMedicinales[i].propiedadesMedicinales == propiedades) {
			resultado.push(listaMedicinales[i]);
			break;
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

//////////////////////////////// Creación de plantas y árboles ////////////////////////////////////////////////


registrarPlantaAromatica(1,"Clavel","10 cm",400,null,"Olor suave");
registrarPlantaAromatica(2,"Rosa","5 cm",350,null,"Olor dulce");
registrarPlantaMedicinal(1,"Rama","20 cm",100,null,"Alivia el dolor estomacal");
registrarPlantaMedicinal(2,"Tomol","15 cm",150,null,"Alivia el dolor de cabeza");
registrarPlantaOrnamental(1,"Ortencia","35 cm",230,null);
registrarPlantaOrnamental(2,"Floripondio","23 cm",300,null);
registrarArbolFrutal(1,"Limonero","1,20 cm",500,null,"primavera");
registrarArbolFrutal(2,"Manzano","2,10 cm",750,null,"verano");
/*
console.log(listaMedicinales[1]);
console.log(listaAromaticas[1]);
console.log(listaOrnamentales[1]);
console.log(listaArboles[1]);
console.log(buscarPorNombre("Limonero"));*/
console.log(verPlantas());
console.log(verPlantasImagen());
console.log(verPlantasNombres());
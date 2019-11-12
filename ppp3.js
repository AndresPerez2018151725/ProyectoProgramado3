var TotalPyA = 0;
var listaOrnamentales = new Array();
var listaAromaticas = new Array();
var listaMedicinales = new Array();
var listaArboles = new Array();
var propiedadesAromaticas = new Array();
var temporadaArboles = new Array();
var imagenOrnamental = getElementById("Insertar nombre de la imagen aca");
//INSERTAR LAS IMAGENES QUE FALTAN
// NO SE SI USAMOS ARRAYS O CON LINKED LISTS, COMO QUIERAN 

//OBJETOS
function Planta(codigo, nombre, alturaMax, precioVenta, imagen){
    this.codigo=codigo;
    this.nombre=nombre;
    this.alturaMax=alturaMax;
    this.precioVenta=precioVenta;
    this.imagen=imagen;
}


function PlantaOrnamental(codigo, nombre, alturaMax, precioVenta,imagen){
    Planta.call(this,codigo);
    Planta.call(this,nombre);
    Planta.call(this,alturaMax);
    Planta.call(this,precioVenta);
    Planta.call(this,imagen);
}

PlantaOrnamental.prototype = Object.create(Planta.prototype,{
	constructor:{
		configurable: true,
		enumerable: true,
		value: PlantaOrnamental,
		writable: true
	}
});


function PlantaAromatica(codigo, nombre, alturaMax, precioVenta,imagen, propiedadesAromaticas) {
    Planta.call(this,codigo);
    Planta.call(this,nombre);
    Planta.call(this,alturaMax);
    Planta.call(this,precioVenta);
    Planta.call(this,imagen);
    this.propiedadesAromaticas = propiedadesAromaticas;
}

PlantaAromatica.prototype = Object.create(Planta.prototype,{
	constructor:{
		configurable: true,
		enumerable: true,
		value: PlantaAromatica,
		writable: true
	}
});



function PlantaMedicinal(codigo, nombre, alturaMax, precioVenta,imagen, propiedadesMedicinales) {
    Planta.call(this,codigo);
    Planta.call(this,nombre);
    Planta.call(this,alturaMax);
    Planta.call(this,precioVenta);
    Planta.call(this,imagen);
    this.propiedadesMedicinales = propiedadesMedicinales;
}

PlantaMedicinal.prototype = Object.create(Planta.prototype,{
	constructor:{
		configurable: true,
		enumerable: true,
		value: PlantaMedicinal,
		writable: true
	}
});


function ArbolFrutal(codigo, nombre, alturaMax, precioVenta,imagen, temporada) {
    Planta.call(this,codigo);
    Planta.call(this,nombre);
    Planta.call(this,alturaMax);
    Planta.call(this,precioVenta);
    Planta.call(this,imagen);
    this.temporada = temporada;
}

ArbolFrutal.prototype = Object.create(Planta.prototype,{
	constructor:{
		configurable: true,
		enumerable: true,
		value: ArbolFrutal,
		writable: true
	}
});






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


LinkedList.prototype.InsertHead = fucntion(value){
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

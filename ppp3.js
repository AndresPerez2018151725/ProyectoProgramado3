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


function PlantaOrnamental(nombre, codigo, altura, precio,imagen) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.altura = altura;
    this.precio = precio;
    this.imagen = imagenOrnamental;
}

function PlantaAromatica(nombre, codigo, altura, precio, propiedades) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.altura = altura;
    this.precio = precio;
    this.propiedades = propiedadesAromaticas;
}



function PlantaMedicinal(nombre, codigo, altura, precio, propiedades) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.altura = altura;
    this.precio = precio;
    this.propiedades = propiedadesAromaticas;

}

function ArbolesFrutales(nombre, codigo, altura, precio, temporada) {
    this.nombre = nombre;
    this.codigo - codigo;
    this.altura = altura;
    this.precio = precio;
    this.temporada = temporadaArboles;
}


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

//Autor: Francisco Javier Rodríguez García.

//Variable para contar el número de envíos del formulario.
var intentos = 0;
//Variable para el array de errores.
var errores;

//Para comentar duda a Teresita.
/*var mensaje_error = document.getElementById("errores").innerHTML;
var mensaje_datos = document.getElementById("datos").innerHTML;
var mensaje_intentos = document.getElementById("intentos").innerHTML;*/

/*En el proceso de carga, se pone el evento para que si se hace click en el botón 
enviar se valide el formulario.*/
window.onload=function(){
    document.getElementById("enviar").addEventListener("click",validar);
    document.getElementById("nombre").addEventListener("blur", mayus);
    document.getElementById("limpiar").addEventListener("click",limpiar);
    var mensaje_error = document.getElementById("errores").innerHTML;
    var mensaje_datos = document.getElementById("datos").innerHTML;
    var mensaje_intentos = document.getElementById("intentos").innerHTML;
}

//Se crea la clase para los objetos CampoErroneo.
class CampoErroneo{
    campo;
    mensaje;
    constructor(campo, mensaje){
        this.campo = campo;
        this.mensaje = mensaje;
    }
}

const validar = () => {
    //Se crea un array vacío para los errores.
    mensaje_error = "";
    mensaje_datos = "";
    mensaje_intentos = "";
    errores = new Array();
    validarNombre();
    validarEmail();
    validarProvincia();
    validarFecha();
    validarTelefono();
    validarCondiciones();
    //Si la longitud del arrayde errores es distinta a 0 hay errores.
    if(errores.length != 0){
        for(i = 0; i < errores.length; i++){
            mensaje_error += (i + 1) + errores[i].mensaje;   
        }
    }
    else{
        mensaje_datos += "campo: " + nombre.id + ", valor: " +
            nombre.value + ".</br>" + "campo: " + email.id + ", valor: " +
            email.value + ".</br>" + "campo: " + provincia.id +
            ", valor: " + provincia.options[provincia.selectedIndex].value + ".</br>"
            + "campo: " + fecha.id + ", valor: " + fecha.value + ".</br>" +
            + "campo: " + telefono.id + ", valor: " + telefono.value + ".</br>" +
            "campo: " + condiciones.id + ", valor: " + condiciones.value;
    }     
    intentos += 1;
    mensaje_intentos = "Este es el intento " + intentos + ".</br>";
}

//Función para pasar el campo nombre a mayúsculas.
const mayus = () => {
    nombre.value = nombre.value.toUpperCase();
}

//Función para limpiar formulario y mensajes.
const limpiar = () => {
    let form = document.getElementById("formulario");
    form.reset();
    mensaje_errores= "";
    mensaje_datos = "";
    mensaje_intentos = "";
}

/*Función para validar el campo nombre, comprobando que no esté vacío
ni que sea un número (no lo pide el enunciado pero por probar).*/
function validarNombre(){
    var nombre = document.getElementById("nombre");
    /*Patrón para validar que no se hayan introducido sólamente espacios en blanco:
        - Los caracteres ^ y $ hacen referencia al inicio y al final respectivamente,
        - \s es un carácter especial para reflejar los espacios en blanco y *
          es un cuantificador que comprueba si el carácter anterior, en este caso
          \s para los espacios en blanco, se repite 0 o más veces.*/
    let patron_nombre = /^\s*$/;
    /*Comprueba si el campo nombre es null, si no se ha introducido nada, si
    sólo se han introducido espacios en blanco o si es un número.*/
    if(nombre.value == null || nombre.value.length == 0 || nombre.value.match(patron_nombre) 
        || !isNaN(nombre.value)){
        //Se crea un objeto CampoErroneo, se añade al array errores y se devuelve false.
        let nombreErroneo = new CampoErroneo(nombre.id, ". El campo: " + nombre.id +
            " no puede estar en blanco.</br>");
        errores.push(nombreErroneo);
        return false;
    }
    else{
        true;
    }
}

/*Función para validar el campo email, comprobando que no esté vacío
y cumpla un patrón.*/
function validarEmail(){
    var email = document.getElementById("email");
    /*Patrón para validar email:
        - Los caracteres ^ y $ hacen referencia al inicio y al final respectivamente.
        - \w+ indica que se puede introducir un caracter (\w) 1 o más veces (+).
        - ([\.-]?\w+)* indica un grupo -([\.-]?\w+)- que se puede repetir 0 o más veces (*).
          El grupo sería un . o un - 0 o 1 veces (?) seguidos de un caracter (\w) una o 
          más veces (+).
        - @\w+ que indica una arroba seguida de un caracter (\w) una o más veces (+).
        - ([\.-]?\w+)* indica un grupo -([\.-]?\w+)- que se puede repetir 0 o más veces (*).
          El grupo sería un . o un - 0 o 1 veces (?) seguidos de un caracter (\w) una o
          más veces (+).
        - (\.[a-z]{2,4})+ indica un grupo -(\.[a-z]{2,4})- que se puede repetir 1 o más 
          veces (+).
          El grupo sería un . seguido de entre 2 y 4 caracteres de la a a la z. Esto para 
          referirnos al dominio que suele ser de entre 2 y 4 letras (es, com, info...).
          Aparte, los dominios en ocasiones pueden repetirse, de ahí el (+).*/  
    let patron_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-z]{2,4})+$/;
    if(email.value == null || email.value.length == 0 || !email.value.match(patron_email)){
        //Se crea un objeto CampoErroneo, se añade al array errores y se devuelve false.
        let emailErroneo = new CampoErroneo(email.id, ". El campo: " + email.id +
            " no es correcto.</br>");
        errores.push(emailErroneo);
        return false;
    }
    else{
        true;
    }
}

/*Función para validar el campo provincia, comprobando que alguna
haya sido seleccionada.*/
function validarProvincia(){
    var provincia = document.getElementById("provincia");
    /*Se comprueba si se ha seleccionado alguna provincia, ya que la que da la opción de 
    seleccionar es la de índice 0, deberá ser distinto a 0.*/
    if(provincia.selectedIndex == 0){
        //Se crea un objeto CampoErroneo, se añade al array errores y se devuelve false.
        let provinciaErronea = new CampoErroneo(provincia.id, ". El campo: " + 
        provincia.id + " no puede estar en blanco.</br>");
        errores.push(provinciaErronea);
        return false;
    }
    else{
        true;
    }
}

//Función para validar el campo fecha.
function validarFecha(){
    var fecha = document.getElementById("fecha");
    /*Patrón para validar fecha:
        - Los caracteres ^ y $ hacen referencia al inicio y al final respectivamente.
        - (0[1-9]|[1-2]\d|3[01]) grupo para los días formado por:
          0[1-9]| 0 seguido de un dígito del 1 al 9 (días del 1 al 9 del mes) o
          [1-2]\d| un 1 o 2 seguido de dígitos del 0-9 (\d) (días del 10 al 29) o 
          3[01] un 3 seguido de un 0 o un 1 (días 30 y 31).
        - ([\/-]) grupo formado por un / o un - para separar días de meses.
        - (0[1-9]|1[012]) grupo para los meses formado por:
          0[1-9]| 0 seguido de un dígito del 1 al 9 para enero hasta septiembre o
          1[012] un 1 seguido de un 0, un 1 o un 2 para octubre a diciembre.
        - \2 referencia al grupo 2 -([\/-])- formado por un / o un - para separar meses de años.
          Lo interesante es que toma el - o el / dependiendo de cual de ellos se eligió previamente,
          evitando fechas de la forma dd/mm-aaaa o dd-mm/aaaa.
        - \d{4} 4 dígitos del 0 al 9 para los años. 
    */
    //let patron_fecha = /^(0[1-9]|[1-2]\d|3[01])([\/-])(0[1-9]|1[012])\2(\d{4})$/;
    /*Se optó por el siguiente formato, cambiando la parte final para tener sólo años que empiecen
    por 19 o 20:
        - (19|20)\d{2} esto sería lo único diferente de lo explicado arriba que vendría a sustituir
          a (\d{4}). (19|20) comprueba que se pongan 19 o 20 \d{2} indica que luego tienen que ir 
          dos dígitos permitiendo esto meter desde los años 1900 hasta el 2099. Al menos no dejaría 
          meter años como el 3400 por ejemplo.
    */
    let patron_fecha = /^(0[1-9]|[1-2]\d|3[01])([\/-])(0[1-9]|1[012])\2(19|20)\d{2}$/
    if(!fecha.value.match(patron_fecha)){
        //Se crea un objeto CampoErroneo, se añade al array errores y se devuelve false.
        let fechaErronea = new CampoErroneo(fecha.id, ". El campo: " + 
        fecha.id + " no es correcto. Formato dd/mm/aaaa o dd-mm-aaaa.</br>");
        errores.push(fechaErronea);
        return false;
    }
    else{
        true;
    }    
}

//Función para validar el campo telefono.
function validarTelefono() {  
    /*Patrón para validar teléfono:
        - Los caracteres ^ y $ hacen referencia al inicio y al final respectivamente.
        - \d{9} 9 dígitos ({9}) que tienen que estar entre el 0 y el 9 (\d).*/
    let patron_telf = /^\d{9}$/;
    if (!telefono.value.match(patron_telf)){
        //Se crea un objeto CampoErroneo, se añade al array errores y se devuelve false.
        let telefonoErroneo = new CampoErroneo(telefono.id, ". El campo: " + 
        telefono.id + " está incorrecto. Sólo números y máximo de 9 dígitos.</br>");
        errores.push(telefonoErroneo);
        return false;
    }
    else{
        true;
    }  
}

//Función para comprobar si se aceptan las condiciones.
function validarCondiciones(){
    condiciones = document.getElementById("condiciones"); 
    if(condiciones.checked == false){
        //Se crea un objeto CampoErroneo, se añade al array errores y se devuelve false.
        let condicionesErroneas = new CampoErroneo(condiciones.id, ". Tienes que leer" 
        + " y aceptar las condiciones, marca el campo " + condiciones.id + ".</br>");
        errores.push(condicionesErroneas);
        return false;
    }
    else{
        true;
    }  
}

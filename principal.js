/*var posts = [
        {
            titulo: 'Prueba de titulo 1',
            fecha: 'Publicado el dia ',
            contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.'
        },
        {
            titulo: 'Prueba de titulo 2',
            fecha: 'Publicado el dia ',
            contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.'
        },
        {
            titulo: 'Prueba de titulo 3',
            fecha: 'Publicado el dia ',
            contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.'
        },
        {
            titulo: 'Prueba de titulo 4',
            fecha: 'Publicado el dia',
            contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.'
        },
        {
            titulo: 'Prueba de titulo 5',
            fecha: 'Publicado el dia',
            contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.'
        },
        {
            titulo: 'Prueba de titulo 6',
            fecha: 'Publicado el dia' ,
            contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.'
        },
    ];*/

    //CÓDIGO CON JQUERY.
    //Variable para el array de errores.
    var errores;
    //Variables para el mensaje de error. 
    var $mensaje_error;  

    var peticion;
    var posts = [];

    const iniciar = () => {
        let opciones = {
            url: "post.json",
            type: "GET",
            dataType: "json"
        };
        $.ajax(opciones)
        .done(function(json){
            posts = json.posts;
            cargada();            
        })
        .fail(function( xhr, status, errorThrown){
        console.log("Error: " + errorThrown +"Estado: " + status );
        })
        .always(function(xhr, status){
        console.log( "Petición finalizada!" );
        });
    }
    
    const cargada = () => {
        if($("#posts") != null){
            var $content = $("#posts");
            for(let i = 0; i < posts.length; i++){
                let fecha = new Date();
                fecha = fecha.toLocaleDateString();
                let $miArticulo = $("<article></article>");
                let $miTitulo = $("<h2></h2>");
                let $miFecha = $("<span></span>");
                let $miContenido = $("<p></p>");
                let $miBoton = $("<button></button>");
                $miArticulo.addClass("post");
                $miTitulo.html(posts[i].titulo);            
                $miFecha.html(posts[i].fecha + " " + fecha);
                $miFecha.css('color','#85929E');
                $miFecha.addClass("date");
                $miContenido.html(posts[i].contenido);
                $miBoton.html("Leer más");
                $miBoton.addClass("button-more");
                $miArticulo.append($miTitulo);
                $miArticulo.append($miFecha);
                $miArticulo.append($miContenido);
                $content.append($miArticulo);
                $content.append($miBoton);
            }
        } 
    }

    //Acciones a realizar al cargar la página.
    $(document).ready(function(){
        iniciar(); 
        //Se comprueba si está almacenado en el localStorage el usuario.
        if(localStorage.getItem("nombre") != null){
            imprimirLogin(localStorage.getItem("nombre"));
        }
        //Se comprueba si está almacenado en el localStorage el CSS.
        if(localStorage.getItem("miCSS") != null){
            cambiarCSS(localStorage.getItem("miCSS"));
        }
        $("#invierno").on("click", cogerCSS);
        $("#primavera").on("click", cogerCSS);
        $("#verano").on("click", cogerCSS);
        $("#otono").on("click", cogerCSS);
        if($('[name="enviar"]')[0] != null){
            $('[name="enviar"]')[0].on("click",validar);
        }
        if($("#entrar") != null){
            $("#entrar").on("click", entrarUsuario);
        }
        if($("#otros") != null){
            $("#otros").on("click", visible);     
        }   
        mensaje_error = $("#errores");        
    });

    var miCSS = "";

    //Función para coger la selección del usuario y en función de ella crear el string.
    function cogerCSS(){
        let seleccion = this.id;
        let ruta = "./css/" + seleccion + ".css";
        localStorage.setItem("miCSS", ruta); 
        cambiarCSS(localStorage.getItem("miCSS"));
    }

    //Función para cambiar el CSS.
    function cambiarCSS(cadena){
        $miCSS = $("#tema");
        $miCSS.attr("href", cadena);
        localStorage.setItem("miCSS", cadena); 
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

    //Cambia a visible el cuadro otros.
    function visible(){
        if($("#otros").is(":checked") == true){
            $("#otrosIntereses").css("visibility", "visible");
        }
        else{
            $("#otrosIntereses").css("visibility", "hidden");
        }
    }

    //Función para entrada de usuario.
    function entrarUsuario(){
        let $nombre = "", $email = "", $password = "";
        $nombre = $("#nombre").val();
        $email = $("#email").val();
        $password = $("#password").val();
        if($nombre != "" && $email != "" && $password != ""){
            localStorage.setItem("nombre", $nombre);
            imprimirLogin(localStorage.getItem("nombre"));
        }
    }

    //Función para imprimir el mensaje de login.
    function imprimirLogin(cad){
        $("#frmIdentificacion").remove();
        let $login = $("#login");
        let $miP = $('<p id="mensaje">');
        $miP.html(`Bienvenido ${cad}.`);
        let $miP_2 = $('<p id="cerrar">');
        $miP_2.html("Cerrar sesión.");
        $miP_2.on("click", cerrarSesion);
        $login.append($miP);
        $login.append($miP_2);
    }

    //Impresión de formulario de login.
    function imprimirFormulario(){
        $("#mensaje").remove();
        $("#cerrar").remove();
        let $miForm = $("<form></form>");
        $miForm.attr({"name":"frmIdentificacion", "id":"frmIdentificacion"});
        let $miNombre = $("<label></label>");
        $miNombre.attr("for", "nombre");
        $miNombre.html("Nombre");
        let $miNombre_in = $("<input></input>");
        $miNombre_in.attr({"type":"text", "name":"nombre", "id":"nombre"});
        let $miEmail = $("<label></label>");
        $miEmail.attr("for","email");
        $miEmail.html("Correo");
        let $miEmail_in = $("<input></input>");
        $miEmail_in.attr({"type":"text", "name":"email", "id":"email"});
        let $miPassword = $("<label></label>");
        $miPassword.attr("for","password");
        $miPassword.html("Contraseña");
        let $miPassword_in = $("<input></input>");
        $miPassword_in.attr({"type":"password", "name":"password", "id":"password"}); ;
        let $miEntrar = $("<input></input>");
        $miEntrar.attr({"type":"button", "value":"Entrar", "name":"entrar", "id":"entrar"});
        $miEntrar.on("click", entrarUsuario)        
        $miForm.append($miNombre);
        $miForm.append($miNombre_in);
        $miForm.append($miEmail);
        $miForm.append($miEmail_in);
        $miForm.append($miPassword);
        $miForm.append($miPassword_in);
        $miForm.append($miEntrar);  
        $("#login").append($miForm);      
    }

    //Función para cerrar sesión.
    function cerrarSesion(){
        localStorage.removeItem("nombre");
        imprimirFormulario();
    }

    //Función para validar.
    const validar = () => {
        //Se crea un array vacío para los errores.
        errores = new Array();
        mensaje_error.html("");    
        validarNombre();
        validarApellidos();
        validarEmail();
        validarConfEmail();
        validarFecha();
        validarCP();
        validarInteres();
        //Si la longitud del array de errores es distinta a 0 hay errores.
        if(errores.length != 0){
            event.preventDefault();
            for(i = 0; i < errores.length; i++){
                mensaje_error.innerHTML += (i + 1) + errores[i].mensaje;                   
            } 
            return false;       
        }
        else{
            return true;
        }     
    }

    /*Función para validar el campo nombre, comprobando que no esté vacío
    ni que sea un número (no lo pide el enunciado pero por probar).*/
    function validarNombre(){
        var nombre = $("#frmContacto #nombre");
        /*Patrón para validar que no se hayan introducido sólamente espacios en blanco:
            - Los caracteres ^ y $ hacen referencia al inicio y al final respectivamente,
            - \s es un carácter especial para reflejar los espacios en blanco y *
            es un cuantificador que comprueba si el carácter anterior, en este caso
            \s para los espacios en blanco, se repite 0 o más veces.*/
        //let patron_nombre = /^\s*$/;
        /*Comprueba si el campo nombre es null, si no se ha introducido nada, si
        sólo se han introducido espacios en blanco o si es un número.*/
        if(nombre.val() == null || nombre.val().length == 0 || nombre.val().match(patron_nombre) 
            || !isNaN(nombre.val())){
            //Se crea un objeto CampoErroneo, se añade al array errores y se devuelve false.
            let nombreErroneo = new CampoErroneo(nombre.id, ". El campo: nombre no puede estar en blanco.</br>");
            errores.push(nombreErroneo);
            return false;
        }
        else{
            true;
        }
    }    

    /*Función para validar el campo apellidos, comprobando que no esté vacío
    ni que sea un número (no lo pide el enunciado pero por probar).*/
    function validarApellidos(){
        var apellidos = $("#apellidos");
        /*Patrón para validar que no se hayan introducido sólamente espacios en blanco:
            - Los caracteres ^ y $ hacen referencia al inicio y al final respectivamente,
            - \s es un carácter especial para reflejar los espacios en blanco y *
            es un cuantificador que comprueba si el carácter anterior, en este caso
            \s para los espacios en blanco, se repite 0 o más veces.*/
        //let patron_apellidos = /^\s*$/;
        /*Comprueba si el campo apellidos es null, si no se ha introducido nada, si
        sólo se han introducido espacios en blanco o si es un número.*/
        if(apellidos.val() == null || apellidos.val().length == 0 || apellidos.val().match(patron_apellidos) 
            || !isNaN(apellidos.val())){
            //Se crea un objeto CampoErroneo, se añade al array errores y se devuelve false.
            let apellidosErroneo = new CampoErroneo(apellidos.id, ". El campo: " + apellidos.id +
                " no puede estar en blanco.</br>");
            errores.push(apellidosErroneo);
            return false;
        }
        else{
            true;
        }
    } 

    /*Función para validar el campo email, comprobando que no esté vacío
    y cumpla un patrón.*/
    function validarEmail(){
        var email = $("#frmContacto #email");
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
        if(email.val() == null || email.val().length == 0 || !email.val().match(patron_email)){
            //Se crea un objeto CampoErroneo, se añade al array errores y se devuelve false.
            let emailErroneo = new CampoErroneo(email.id, ". El campo: email no es correcto.</br>");
            errores.push(emailErroneo);
            return false;
        }
        else{
            true;
        }
    } 

    /*Función para validar el campo confirmación de email, buscando que sea igual
    al campo email.*/
    function validarConfEmail(){
        var email = $("#frmContacto #email");
        var confEmail = $("#confEmail");
        //Se comprueba si el campo email coincide con el de la confirmación.
        if(email.val() != confEmail.val()){
            //Se crea un objeto CampoErroneo, se añade al array errores y se devuelve false.
            let confEmailErroneo = new CampoErroneo(confEmail.id, ". El campo: confimación de email" +
                " no es correcto.</br>");
            errores.push(confEmailErroneo);
            return false;
        }
        else{
            true;
        }
    }    
    
    //Función para validar el campo fecha.
    function validarFecha(){
        var fecha = $("#fecha");
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
        if(!fecha.val().match(patron_fecha)){
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

    //Función para validar el campo CP.
    function validarCP() {  
        var cp = $("#cp");
        /*Patrón para validar el CP:
            - Los caracteres ^ y $ hacen referencia al inicio y al final respectivamente.
            - \d{5} 5 dígitos ({9}) que tienen que estar entre el 0 y el 9 (\d).*/
        let patron_cp = /^\d{5}$/;
        if (!cp.val().match(patron_cp)){
            //Se crea un objeto CampoErroneo, se añade al array errores y se devuelve false.
            let cpErroneo = new CampoErroneo(cp.id, ". El campo: CP" + 
            " está incorrecto. Sólo números y máximo de 5 dígitos.</br>");
            errores.push(cpErroneo);
            return false;
        }
        else{
            true;
        }  
    } 
    
    //Función para validar las áreas de interés.
    function validarInteres() {  
        var diseno = $("#diseno");
        var programacion = $("#programacion");
        var otros = $("#otros");
        if (!diseno.is(":checked") && !programacion.is(":checked") && !otros.is(":checked")){
            //Se crea un objeto CampoErroneo, se añade al array errores y se devuelve false.
            let interesErroneo = new CampoErroneo("interes", ". Debe seleccionar" + 
            " al menos un área de interés.</br>");
            errores.push(interesErroneo);
            return false;
        }
        else{
            //Se comprueba que se escriba algún área de interés adicional si se han marcado otros.
            if(otros.is(":checked") == true){                
                if ($("#otro").val() == null || $("#otro").val() == ""){
                    //Se crea un objeto CampoErroneo, se añade al array errores y se devuelve false.
                    let otroInteresErroneo = new CampoErroneo("otrosIntereses", ". Debe escribir" + 
                    " otros intereses.</br>");
                    errores.push(otroInteresErroneo);
                    return false;
                }
                else{
                    true;
                }
            }           
        }  
    }  

//-------------------------------------------------------------------------------

    //CÓDIGO SIN JQUERY
    //Variable para el array de errores.
    //var errores;
    //Variables para el mensaje de error. 
    //var mensaje_error; 
	/* Al cargar la página*/
		// añadir los posts de la varaible posts al contenedor #posts
		// Sugerencias: 
		// cada post en una etiqueta article con clase "post"
		// class button-more para el enlace  "Leer más"
		// span con clase "date" para la fecha del post
		// p: para el contenido del post
	
    /*var peticion;
    var posts;

    const iniciar = () => {
        peticion = new XMLHttpRequest();
        peticion.open("GET", "http://localhost/post.json", true);
        peticion.send();
        peticion.addEventListener("load", cargada);
    }
    
    const cargada = () => {
        if(document.getElementById("posts") != null){
            var content  = document.getElementById("posts");
            posts = peticion.responseText;
            for(let i = 0; i < posts.length; i++){
                let fecha = new Date();
                fecha = fecha.toLocaleDateString();
                let miArticulo = document.createElement("article");
                let miTitulo = document.createElement("h2");
                let miFecha = document.createElement("span");
                let miContenido = document.createElement("p");
                let miBoton = document.createElement("button");
                miArticulo.className = "post";
                miTitulo.innerHTML =  posts[i].titulo;            
                miFecha.innerHTML = posts[i].fecha + " " + fecha;
                miFecha.style = "color:#85929E";
                miFecha.class = "date";
                miContenido.innerHTML = posts[i].contenido;
                miBoton.innerHTML = "Leer más";
                miBoton.className = "button-more";
                miArticulo.appendChild(miTitulo);
                miArticulo.appendChild(miFecha);
                miArticulo.appendChild(miContenido);
                content.appendChild(miArticulo);
                content.appendChild(miBoton);
            }
        } 
    }

    window.onload = function(){    
        iniciar();   
        //Se comprueba si está almacenado en el localStorage el usuario.
        if(localStorage.getItem("nombre") != null){
            imprimirLogin(localStorage.getItem("nombre"));
        }
        //Se comprueba si está almacenado en el localStorage el CSS.
            if(localStorage.getItem("miCSS") != null){
                cambiarCSS(localStorage.getItem("miCSS"));
            }
        document.getElementById("invierno").addEventListener("click", cogerCSS);
        document.getElementById("primavera").addEventListener("click", cogerCSS);
        document.getElementById("verano").addEventListener("click", cogerCSS);
        document.getElementById("otono").addEventListener("click", cogerCSS);
        if(document.getElementsByName("enviar")[0] != null){
            document.getElementsByName("enviar")[0].addEventListener("click",validar);
        }
        if(document.getElementById("entrar") != null){
            document.getElementById("entrar").addEventListener("click", entrarUsuario);
        }
        if(document.getElementById("otros") != null){
            document.getElementById("otros").addEventListener("click", visible);     
        }   
        mensaje_error = document.getElementById("errores");
    }

    var miCSS = "";

    //Se crea la clase para los objetos CampoErroneo.
    class CampoErroneo{
        campo;
        mensaje;
        constructor(campo, mensaje){
            this.campo = campo;
            this.mensaje = mensaje;
        }
    }

    //Cambia a visible el cuadro otros.
    function visible(){
        if(document.getElementById("otros").checked == true){
            document.getElementById("otrosIntereses").style.visibility = "visible";
        }
        else{
            document.getElementById("otrosIntereses").style.visibility = "hidden";
        }
    }

    //Función para coger la selección del usuario y en función de ella crear el string.
    function cogerCSS(){
        let seleccion = this.id;
        let ruta = "./css/" + seleccion + ".css";
        localStorage.setItem("miCSS", ruta); 
        cambiarCSS(localStorage.getItem("miCSS"));
    }
    
    //Función para cambiar el CSS.
    function cambiarCSS(cadena){
        miCSS = document.getElementById("tema");
        miCSS.href = cadena;
        localStorage.setItem("miCSS", cadena); 
    }

    //Función para entrada de usuario.
    function entrarUsuario(){
        let nombre = "", email = "", password = "";
        nombre = document.frmIdentificacion.nombre.value;
        email = document.frmIdentificacion.email.value;
        password = document.getElementById("password").value;
        if(nombre != "" && email != "" && password != ""){
            localStorage.setItem("nombre", nombre);
            imprimirLogin(localStorage.getItem("nombre"));
        }
    }
    
    //Función para imprimir el mensaje de login.
    function imprimirLogin(cad){
        $("#frmIdentificacion").remove();
        let login = document.getElementById("login");
        let miP = document.createElement("p");
        miP.id = "mensaje";
        miP.innerHTML = `Bienvenido ${cad}.`;
        let miP_2 = document.createElement("p");
        miP_2.id = "cerrar";
        miP_2.innerHTML = "Cerrar sesión.";
        miP_2.addEventListener("click", cerrarSesion);
        login.appendChild(miP);
        login.appendChild(miP_2);
    }

    //Impresión de formulario de login.
    function imprimirFormulario(){
        $("#mensaje").remove();
        $("#cerrar").remove();
        let miForm = document.createElement("form");
        miForm.name = "frmIdentificacion";
        miForm.id = "frmIdentificacion";
        let miNombre = document.createElement("label");
        miNombre.for = "nombre";
        miNombre.innerHTML = "Nombre";
        let miNombre_in = document.createElement("input");
        miNombre_in.type = "text";
        miNombre_in.name = "nombre";
        miNombre_in.id = "nombre";
        let miEmail = document.createElement("label");
        miEmail.for = "email";
        miEmail.innerHTML = "Correo";
        let miEmail_in = document.createElement("input");
        miEmail_in.type = "text";
        miEmail_in.name = "email";
        miEmail_in.id = "email";
        let miPassword = document.createElement("label");
        miPassword.for = "password";
        miPassword.innerHTML = "Contraseña";
        let miPassword_in = document.createElement("input");
        miPassword_in.type = "password";
        miPassword_in.name = "password";
        miPassword_in.id = "password";
        let miEntrar = document.createElement("input");
        miEntrar.type = "button";
        miEntrar.value = "Entrar";
        miEntrar.id = "entrar";
        miEntrar.name = "entrar";
        miEntrar.addEventListener("click", entrarUsuario)        
        miForm.appendChild(miNombre);
        miForm.appendChild(miNombre_in);
        miForm.appendChild(miEmail);
        miForm.appendChild(miEmail_in);
        miForm.appendChild(miPassword);
        miForm.appendChild(miPassword_in);
        miForm.appendChild(miEntrar);  
        document.getElementById("login").appendChild(miForm);      
    }

    function cerrarSesion(){
        localStorage.removeItem("nombre");
        imprimirFormulario();
    }

    const validar = () => {
        //Se crea un array vacío para los errores.
        errores = new Array();
        mensaje_error.innerHTML = "";    
        validarNombre();
        validarApellidos();
        validarEmail();
        validarConfEmail();
        validarFecha();
        validarCP();
        validarInteres();
        //Si la longitud del array de errores es distinta a 0 hay errores.
        if(errores.length != 0){
            event.preventDefault();
            for(i = 0; i < errores.length; i++){
                mensaje_error.innerHTML += (i + 1) + errores[i].mensaje;                   
            } 
            return false;       
        }
        else{
            return true;
        }     
    }

    //Función para limpiar mensajes.
    /*const limpiar = () => {
        document.getElementById("errores").innerHTML= "";
    } */

    /*Función para validar el campo nombre, comprobando que no esté vacío
    ni que sea un número (no lo pide el enunciado pero por probar).*/
    /*function validarNombre(){
        var nombre = document.frmContacto.nombre;
        /*Patrón para validar que no se hayan introducido sólamente espacios en blanco:
            - Los caracteres ^ y $ hacen referencia al inicio y al final respectivamente,
            - \s es un carácter especial para reflejar los espacios en blanco y *
            es un cuantificador que comprueba si el carácter anterior, en este caso
            \s para los espacios en blanco, se repite 0 o más veces.*/
        /*let patron_nombre = /^\s*$/;
        /*Comprueba si el campo nombre es null, si no se ha introducido nada, si
        sólo se han introducido espacios en blanco o si es un número.*/
        /*if(nombre.value == null || nombre.value.length == 0 || nombre.value.match(patron_nombre) 
            || !isNaN(nombre.value)){
            //Se crea un objeto CampoErroneo, se añade al array errores y se devuelve false.
            let nombreErroneo = new CampoErroneo(nombre.id, ". El campo: nombre no puede estar en blanco.</br>");
            errores.push(nombreErroneo);
            return false;
        }
        else{
            true;
        }
    }    

    /*Función para validar el campo apellidos, comprobando que no esté vacío
    ni que sea un número (no lo pide el enunciado pero por probar).*/
    /*function validarApellidos(){
        var apellidos = document.getElementById("apellidos");
        /*Patrón para validar que no se hayan introducido sólamente espacios en blanco:
            - Los caracteres ^ y $ hacen referencia al inicio y al final respectivamente,
            - \s es un carácter especial para reflejar los espacios en blanco y *
            es un cuantificador que comprueba si el carácter anterior, en este caso
            \s para los espacios en blanco, se repite 0 o más veces.*/
        /*let patron_apellidos = /^\s*$/;
        /*Comprueba si el campo apellidos es null, si no se ha introducido nada, si
        sólo se han introducido espacios en blanco o si es un número.*/
        /*if(apellidos.value == null || apellidos.value.length == 0 || apellidos.value.match(patron_apellidos) 
            || !isNaN(apellidos.value)){
            //Se crea un objeto CampoErroneo, se añade al array errores y se devuelve false.
            let apellidosErroneo = new CampoErroneo(apellidos.id, ". El campo: " + apellidos.id +
                " no puede estar en blanco.</br>");
            errores.push(apellidosErroneo);
            return false;
        }
        else{
            true;
        }
    } 

    /*Función para validar el campo email, comprobando que no esté vacío
    y cumpla un patrón.*/
    /*function validarEmail(){
        var email = document.frmContacto.email;
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
        /*let patron_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-z]{2,4})+$/;
        if(email.value == null || email.value.length == 0 || !email.value.match(patron_email)){
            //Se crea un objeto CampoErroneo, se añade al array errores y se devuelve false.
            let emailErroneo = new CampoErroneo(email.id, ". El campo: email no es correcto.</br>");
            errores.push(emailErroneo);
            return false;
        }
        else{
            true;
        }
    } 

    /*Función para validar el campo confirmación de email, buscando que sea igual
    al campo email.*/
    /*function validarConfEmail(){
        var email = document.frmContacto.email;
        var confEmail = document.getElementById("confEmail");
        //Se comprueba si el campo email coincide con el de la confirmación.
        if(email.value != confEmail.value){
            //Se crea un objeto CampoErroneo, se añade al array errores y se devuelve false.
            let confEmailErroneo = new CampoErroneo(confEmail.id, ". El campo: confimación de email" +
                " no es correcto.</br>");
            errores.push(confEmailErroneo);
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
        /*let patron_fecha = /^(0[1-9]|[1-2]\d|3[01])([\/-])(0[1-9]|1[012])\2(19|20)\d{2}$/
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

    //Función para validar el campo CP.
    function validarCP() {  
        var cp = document.getElementById("cp");
        /*Patrón para validar el CP:
            - Los caracteres ^ y $ hacen referencia al inicio y al final respectivamente.
            - \d{5} 5 dígitos ({9}) que tienen que estar entre el 0 y el 9 (\d).*/
        /*let patron_cp = /^\d{5}$/;
        if (!cp.value.match(patron_cp)){
            //Se crea un objeto CampoErroneo, se añade al array errores y se devuelve false.
            let cpErroneo = new CampoErroneo(cp.id, ". El campo: CP" + 
            " está incorrecto. Sólo números y máximo de 5 dígitos.</br>");
            errores.push(cpErroneo);
            return false;
        }
        else{
            true;
        }  
    } 
    
    //Función para validar las áreas de interés.
    function validarInteres() {  
        var diseno = document.getElementById("diseno");
        var programacion = document.getElementById("programacion");
        var otros = document.getElementById("otros");
        if (!diseno.checked && !programacion.checked && !otros.checked){
            //Se crea un objeto CampoErroneo, se añade al array errores y se devuelve false.
            let interesErroneo = new CampoErroneo("interes", ". Debe seleccionar" + 
            " al menos un área de interés.</br>");
            errores.push(interesErroneo);
            return false;
        }
        else{
            //Se comprueba que se escriba algún área de interés adicional si se han marcado otros.
            if(otros.checked == true){                
                if (document.getElementById("otro").value == null || document.getElementById("otro").value == ""){
                    //Se crea un objeto CampoErroneo, se añade al array errores y se devuelve false.
                    let otroInteresErroneo = new CampoErroneo("otrosIntereses", ". Debe escribir" + 
                    " otros intereses.</br>");
                    errores.push(otroInteresErroneo);
                    return false;
                }
                else{
                    true;
                }
            }           
        }  
    }   */ 
    
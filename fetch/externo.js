//fetch (ajax) y petcioniones a servicios / apis rest.
let divusuarios = document.querySelector("#usuarios");
let divusuariosolo = document.querySelector("#usuarioSolo");
let divalumno = document.querySelector("#alumno");
let divdatosalumno = document.querySelector("#datosalumno");

//promesas en cascada

//fetch es una promesa que recibe una url y accede a ese servicio remoto
//hace la peticion y se queda a la espera
cogerTodosUsuarios()
    //con el metodo then, recogemos los datos
    //recibe un parametro data, y lo convierto a json
    //con la funcion flecha directamente ya te hace el return
    .then(users => users.json())
    //entonces se queda a la espera de otro then para capturarla y hacer 
    //lo que queramos con ella

    /*
    .then (function (users){
        return users.json();
    })
    */

    .then(users => {
        console.log("then 1")
        usuarios = users.data;
        //llamamos a la funcion para que haga el listado
        listadousuarios(usuarios)

        //una vez muestre todos los usuarios, vamos a decirle que muestre el
        //usuario solo
        //le pasamos el fetch dentro de una funcion (realmente creo que se podria poner a pelo)
        return cogerUnUsuario();
    })
    //recibe el usuario solo y lo convierte a json como antes
    .then(usuariosolo => {
        console.log("then 2");
        return  usuariosolo.json();
    })
    
    .then(usuariosolo => {
        mostrarSolo(usuariosolo.data);

        //ya tenemos otra promesa disponible para hacer otro then
        return listaalumnos();
    })

    .then(alumnos => {
        console.log("then 3")
        divalumno.innerHTML = alumnos;

        return listaAlumnosObjeto();
    })
    .then(alumnoObjeto => {
        console.log("objeto", alumnoObjeto)
        mostrarAlumno(alumnoObjeto);
    })

    //para cazar errores en caso de que por ejemplo la url de la api
    //esta mal
    
    .catch(error =>{
        alert("algo va mal");
    });
    

//encapsulamos el fetch de todos los usuarios en una funcion 
function cogerTodosUsuarios() {
    return fetch("https://reqres.in/api/users?page=2");
}
//fetch para obtener un unico usuario
function cogerUnUsuario() {
    return fetch("https://reqres.in/api/users/2");
}

function listaAlumnosObjeto() {
    let alumnoObjeto = {
        nombre: "Pascual",
        apellidos: "Fernandez",
        url: "http://www.google.com"
    };
    return alumnoObjeto
}

function listaalumnos() {
    let alumno = {
        nombre: "Pascual",
        apellidos: "Fernandez",
        url: "www.google.com"
    };
    //crear una promesa desde cero y le pasas como parametros resolve y reject
    //convierto el objeto json a un string
    //si la promesa no se cumple porque no se ha convertido salta reject
    //si se cumple porque si se ha convertido salta el resolve
    return new Promise((resolve, reject) => {
        let alumno_string = "";

        alumno_string = JSON.stringify(alumno);
        if (typeof alumno_string != "string" || alumno_string == "") {
            return reject("error 3000");

        } else {
            return resolve(alumno_string)
        }


    })


}

function listadousuarios(usuarios) {
    usuarios.forEach((user, indice) => {
        let nombre = document.createElement("h3");
        nombre.innerHTML = indice + ". " + user.first_name + " " + user.last_name;
        divusuarios.append(nombre)

        let cargando = document.querySelector(".loading");
        cargando.style.display = "none";
    });
}

function mostrarSolo(usuariosolo) {
    let nombre = document.createElement("h2");
    let avatar = document.createElement("img");
    nombre.innerHTML = usuariosolo.first_name + " " + usuariosolo.last_name;
    avatar.src = usuariosolo.avatar;
    avatar.width = "150";
    avatar.height = "150";

    divusuariosolo.append(nombre);
    divusuariosolo.append(avatar);


    let cargando = document.querySelector("#usuarioSolo .loading");
    cargando.style.display = "none";

}

function mostrarAlumno(alumnoObjeto) {
    let nombrealumno = document.createElement("h3");
    
    let urlalumno = document.createElement("a");
    urlalumno.innerHTML = alumnoObjeto.url;
    urlalumno.setAttribute("href", alumnoObjeto.url)
    
    nombrealumno.innerHTML = alumnoObjeto.nombre + " " + alumnoObjeto.apellidos;

    
    divdatosalumno.appendChild(nombrealumno);
    divdatosalumno.appendChild(urlalumno)
    
    let cargando = document.querySelector("#datosalumno .loading");
    cargando.style.display = "none";


    

}


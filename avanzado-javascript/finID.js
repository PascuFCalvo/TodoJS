

const users = [];
users.push({ id: 123, name: 'Juanito Alcachofa' });
users.push({ id: 456, name: 'Juanita Alcaparra' });

function encuentraUsuario(array, idUsuario) {
    /*  ASI FUNCIONA CON FUNCION FLECHA
    
        let usuarioEncontrado = array.find(itemInArray => itemInArray.id == idUsuario)
        if (usuarioEncontrado){
            console.log (usuarioEncontrado.name);
        }else{
            console.log ("usuario no encontrado")}
    
    }
    */

    // CON FUNCION FIND LAMANDO A OTRA FUNCION 

    function itemInArray(indice) {
        
        if (indice.id == idUsuario) {
            return true;
        };
    }
    let usuarioEncontrado = array.find(itemInArray);
    

    if (usuarioEncontrado) {
        console.log(usuarioEncontrado.name);
    } else {
        console.log("usuario no encontrado")
    }
}

encuentraUsuario(users, 456)
encuentraUsuario(users, 999)




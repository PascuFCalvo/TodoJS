//definir los tipos de datos con los que va a trabajar la aplicacion
//se puede hacer aqui o directamente en una carpeta models aparte

//tipo cliente y tupo Grupo

export interface Cliente {
    id: number;
    nombre: string;
    cif: string;
    direccion: string;
    grupo: number;
}

export interface Grupo{
    id: number;
    nombre: string;
}

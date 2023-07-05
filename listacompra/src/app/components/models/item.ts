//aqui metemos los modelos de datos y definimos los objetos

//definimos el objeto tipo Item, que luego le pasamos a items.components
//lo exportamos para poder usarlo fuera de aqui...>
export class Item{
    //hay que inicializarlos a algo (si no me da errores)
    id: number = 0;
    title: string = "";
    price: number = 0;
    quantity: number = 0;
    completed: boolean = false;
}
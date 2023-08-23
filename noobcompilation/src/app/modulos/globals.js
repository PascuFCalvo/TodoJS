
    console.log(global);
    console.log(setInterval);
   
   
    setInterval(()=>{
    console.log("hola")
  },1000);

  //da error de variables pero para el coderunner funciona
  
  let i = 1;
  let intervalo = setInterval(function(){
    console.log("hola")
    if (i === 3){
      clearInterval(intervalo);
    }i++;
  },1000);

  //por ejemplo si ejecutas esta y la de arriba a la vez, salta primero esta (es inmediata)

  setImmediate(function(){
    console.log("ya")
  });

  console.log(process); //acceder a todo el json del proceso
  console.log(__dirname);//acceder al directorio
  console.log(__filename);//acceder al nombre del archivo

  //recomendado no usar variables globales porque es un foco de problemas pero en
  //caso de tener que hacer alguna

  global.miVariable = "valorX";

  console.log(global.miVariable);
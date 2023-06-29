let botonmas = document.querySelector(".mas");
let botonreset = document.querySelector(".reset");
let botonmenos = document.querySelector(".menos");
let contador = document.querySelector(".contador");


botonmas.addEventListener("click",()=>{
    let cont = parseInt(contador.textContent);
    cont++;
    contador.textContent = cont;
    
})
botonmenos.addEventListener("click",()=>{
    let cont = parseInt(contador.textContent);
    console.log(cont);
    cont--;
    contador.textContent = cont;
})

botonreset.addEventListener("click",()=>{
    contador.textContent = 0
    
})

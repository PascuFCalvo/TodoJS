/*
let cat ={
    name: "gato",
    tags: ["puto","maquina","pene"],
    showtags(){
        this.tags.forEach(tag => console.log(tag))
        //cat.tags.forEach(tag => console.log(tag)) - esto seria lo mismo
    }
}
cat.showtags()
*/


/*
let cat ={
    name: "gato",
    tags: ["puto","maquina","pene"],     
}

function showtags (){
for (let i = 0; i< cat.tags.length ; i++)
console.log(cat.tags[i])

}
showtags(cat)
console.log (cat.tags.length)
*/
let cat ={
    name: "gato",
    tags: ["puto","maquina","pene"],     
}
function showtags(){
cat.tags.forEach(tag => console.log(tag))
}

showtags()
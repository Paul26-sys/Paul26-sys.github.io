//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=19;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}
//selecciono todas las barras generales par aluego manipularlas
let ING = document.getElementById("ING");
crearBarra(ING);
let Analista = document.getElementById("Analista");
crearBarra(Analista);
let Ciencia = document.getElementById("Ciencia");
crearBarra(Ciencia);
let AnalistaDatos = document.getElementById("AnalistaDatos");
crearBarra(AnalistaDatos);
let Inversionista = document.getElementById("Inversionista");
crearBarra(Inversionista);
let Html = document.getElementById("Html");
crearBarra(Html);
//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;
//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=100 && entro==false){
        entro = true;
        const intervalING = setInterval(function(){
            pintarBarra(ING, 12, 0, intervalING);
        },100);
        const intervalAnalista = setInterval(function(){
            pintarBarra(Analista, 19, 1, intervalAnalista);
        },100);
        const intervalCiencia = setInterval(function(){
            pintarBarra(Ciencia, 20, 2, intervalCiencia);
        },100);
        const intervalAnalistaDatos = setInterval(function(){
            pintarBarra(AnalistaDatos, 16, 3, intervalAnalistaDatos);
        },100);
        const intervalInversionsita = setInterval(function(){
            pintarBarra(Inversionista, 16, 4, intervalInversionsita);
        },100);
        const intervalHtml = setInterval(function(){
            pintarBarra(Html, 14, 5, intervalHtml);
        },100);
    }
}
//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#D2691E";
    }else{
        clearInterval(interval)
    }
}
//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}

const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");

const pantallaPrincipal = document.getElementById("pantallaPrincipal");
const pantallaRomantica = document.getElementById("pantallaRomantica");

const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btnMusica");


const contenedorParticulas =
document.getElementById("particulas");

const frasesContenedor = document.getElementById("frases");

const btnReiniciar =
    document.getElementById("btnReiniciar");



const frases = [
"Eres mi lugar favorito 💙",
"Contigo todo es mejor ✨",
"Una y otra vez te elegiría a ti 💙",
"Gracias por existir 🌷",
"Tu sonrisa ilumina mis días 🥹",
"Eres la mujer que tanto le pedi a DIOS🥰",
"Se lo pedi tanto que hasta te me aparecias en mi sueños😻",
"Eres unica👸🏽",
"perfecta🤩",
"E inigualable morenita 💙",
"Y ahora oficialmente... mi novia 😍",
"Je te promets de te rendre heureux jusqu'au dernier jour💙😍",
"je t'aime🥺😘",
"et je le ferai toujours, ma petite brune 🙈🥰👸🏽💙"
];

const mensajesNo = [
    "¿Segura? 😳",
    "Piénsalo otra vez 🙈",
    "El Sí se ve más bonito 💙",
    "No seas malita 🥹",
    "Ya di que sí 😭",
    "No seas asi morenita😭",
    "ya esos no son juegos morenita🥲",
    "Ni en invierno hace tanto frio como tu respuesta🥶",
    "Dale casi lo atrapas jajaja🤣",
    "Dale dale tu puedes😁",
    "No tienes escapatoria 😂"
];

btnNo.addEventListener("mouseenter", moverBoton);
btnNo.addEventListener("click", moverBoton);




function moverBoton() {


const ancho = window.innerWidth - btnNo.offsetWidth;
const alto = window.innerHeight - btnNo.offsetHeight;

const nuevaX = Math.floor(Math.random() * ancho);
const nuevaY = Math.floor(Math.random() * alto);

btnNo.style.left = nuevaX + "px";
btnNo.style.top = nuevaY + "px";

btnNo.textContent =
    mensajesNo[Math.floor(Math.random() * mensajesNo.length)];

}


btnSi.addEventListener("click", function () {


pantallaPrincipal.classList.add("oculto");
pantallaRomantica.classList.remove("oculto");
btnMusica.classList.remove("oculto");

musica.play().catch(error => {
    console.log("Error al reproducir:", error);

});
iniciarContador();
mostrarFrases();
explosionCorazones();
fuegosArtificiales();

setInterval(crearCorazon, 300);


});

function mostrarFrases() {


let i = 0;

frasesContenedor.textContent = frases[0];

const intervalo = setInterval(function () {

    i++;

    if (i < frases.length) {
        frasesContenedor.textContent = frases[i];
    } else {
        clearInterval(intervalo);

document.getElementById("regalo")
    .classList.remove("oculto");

    btnReiniciar.classList.remove("oculto");
    }

}, 3000);


}

function crearCorazon() {


const corazon = document.createElement("div");

corazon.classList.add("corazon");

const corazones = ["💙", "💙", "💙", "💕", "💖"];

corazon.innerHTML = corazones[Math.floor(Math.random() * corazones.length)];

corazon.style.left = Math.random() * 100 + "vw";
corazon.style.bottom = "-30px";
corazon.style.fontSize = (20 + Math.random() * 25) + "px";

document.body.appendChild(corazon);

setTimeout(function () {
    corazon.remove();
}, 6000);


}

function explosionCorazones() {

    for(let i = 0; i < 30; i++){

        setTimeout(() => {
            crearCorazon();
        }, i * 80);

    }

}

function iniciarContador(){

    const fechaInicio = new Date("2026-04-18");

    setInterval(() => {

        const ahora = new Date();

        const diferencia = ahora - fechaInicio;

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

        const horas = Math.floor(
            (diferencia / (1000 * 60 * 60)) % 24
        );

        const minutos = Math.floor(
            (diferencia / (1000 * 60)) % 60
        );

        document.getElementById("contador").textContent =
            `${dias} días, ${horas} horas y ${minutos} minutos`;

    }, 1000);

}

function fuegosArtificiales(){

    for(let i = 0; i < 60; i++){

        setTimeout(() => {

            crearCorazon();

        }, i * 50);

    }

}


btnMusica.addEventListener("click", function(){

    if(musica.paused){

        musica.play();
        btnMusica.textContent = "⏸️ Pausar música";

    }else{

        musica.pause();
        btnMusica.textContent = "▶️ Reanudar música";

    }

});


btnReiniciar.addEventListener("click", function(){

    location.reload();

});


function crearParticula(){

    const particula = document.createElement("div");

    particula.className="particula";

    const iconos=[
        "💙",
        "✨",
        "🤍",
        "💫",
        "🫧"
    ];

    particula.innerHTML=
    iconos[Math.floor(Math.random()*iconos.length)];

    particula.style.left=
    Math.random()*100+"vw";

    particula.style.fontSize=
    (15+Math.random()*20)+"px";

    particula.style.animationDuration=
    (8+Math.random()*7)+"s";

    contenedorParticulas.appendChild(particula);

    setTimeout(()=>{

        particula.remove();

    },15000);

}

setInterval(crearParticula,500);


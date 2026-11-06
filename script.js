
const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");

const pantallaPrincipal = document.getElementById("pantallaPrincipal");
const pantallaRomantica = document.getElementById("pantallaRomantica");

const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btnMusica");

const contenedorParticulas = document.getElementById("particulas");
const frasesContenedor = document.getElementById("frases");
const btnReiniciar = document.getElementById("btnReiniciar");

// Frases románticas para Noemi
const frases = [
    "Eres mi lugar favorito 💗👸🏻",
    "Contigo todo es mejor ✨",
    "Una y otra vez te elegiría a ti 💗👸🏻",
    "Gracias por existir 🌷",
    "Tu sonrisa ilumina mis días 🥹",
    "Eres la mujer que tanto le pedí a DIOS 🥰",
    "Te pedí tanto que hasta aparecías en mis sueños 😻",
    "Eres única, mi princesa 👸🏻💗",
    "Simplemente perfecta 🤩",
    "Eres incomparable, mi Flakita 💗👸🏻",
    "Y ahora oficialmente... ¡mi novia! 😍",
    "Te prometo hacerte feliz hasta el último día 💗",
    "Te amo con todo mi corazón 🥺😘",
    "Y siempre lo haré, mi Flakita hermosa 🙈🥰💗👸🏻"
];

// Mensajes cuando intenta presionar NO
const mensajesNo = [
    "¿Segura? 😳",
    "Piénsalo otra vez 🙈",
    "El SÍ se ve más bonito 💗",
    "No seas malita 🥹",
    "Ya di que sí 😭",
    "No seas así, Flakita 😭",
    "Ya esos no son juegos, Flakita 🥲",
    "Ni en invierno hace tanto frío como tu respuesta 🥶",
    "Dale, casi lo atrapas jajaja 🤣",
    "Dale, dale, tú puedes 😁",
    "No tienes escapatoria 😂"
];

// Movimiento del botón NO
btnNo.addEventListener("mouseenter", moverBoton);
btnNo.addEventListener("click", moverBoton);

function moverBoton() {

    const ancho = window.innerWidth - btnNo.offsetWidth;
    const alto = window.innerHeight - btnNo.offsetHeight;

    const nuevaX = Math.floor(Math.random() * Math.max(0, ancho));
    const nuevaY = Math.floor(Math.random() * Math.max(0, alto));

    btnNo.style.left = nuevaX + "px";
    btnNo.style.top = nuevaY + "px";

    btnNo.textContent =
        mensajesNo[Math.floor(Math.random() * mensajesNo.length)];
}

// Cuando presiona SÍ
btnSi.addEventListener("click", function () {

    pantallaPrincipal.classList.add("oculto");
    pantallaRomantica.classList.remove("oculto");
    btnMusica.classList.remove("oculto");

    musica.play().catch(error => {
        console.log("Error al reproducir la música:", error);
    });

    iniciarContador();
    mostrarFrases();
    explosionCorazones();
    fuegosArtificiales();

    setInterval(crearCorazon, 300);

});

// Mostrar frases románticas
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

// Crear corazones flotantes
function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.classList.add("corazon");

    const corazones = ["💗👸🏻", "💗", "💕", "💖", "💗"];

    corazon.innerHTML =
        corazones[Math.floor(Math.random() * corazones.length)];

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.bottom = "-30px";

    corazon.style.fontSize =
        (20 + Math.random() * 25) + "px";

    document.body.appendChild(corazon);

    setTimeout(function () {
        corazon.remove();
    }, 6000);

}

// Explosión de corazones
function explosionCorazones() {

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {
            crearCorazon();
        }, i * 80);

    }

}

// Contador del tiempo

function iniciarContador() {

    // Guardar el instante exacto en que comienza
    const fechaInicio = new Date();

    function actualizarContador() {

        const ahora = new Date();

        const diferencia = ahora - fechaInicio;

        const dias = Math.floor(
            diferencia / (1000 * 60 * 60 * 24)
        );

        const horas = Math.floor(
            (diferencia / (1000 * 60 * 60)) % 24
        );

        const minutos = Math.floor(
            (diferencia / (1000 * 60)) % 60
        );

        const segundos = Math.floor(
            (diferencia / 1000) % 60
        );

        document.getElementById("contador").textContent =
            `${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos 💗`;
    }

    // Mostrar inmediatamente el contador en cero
    actualizarContador();

    // Actualizar cada segundo
    setInterval(actualizarContador, 1000);
}


// Fuegos artificiales románticos
function fuegosArtificiales() {

    for (let i = 0; i < 60; i++) {

        setTimeout(() => {
            crearCorazon();
        }, i * 50);

    }

}

// Control de música
btnMusica.addEventListener("click", function () {

    if (musica.paused) {

        musica.play();

        btnMusica.textContent = "⏸️ Pausar música";

    } else {

        musica.pause();

        btnMusica.textContent = "▶️ Reanudar música";

    }

});

// Reiniciar experiencia
btnReiniciar.addEventListener("click", function () {

    location.reload();

});

// Crear partículas decorativas
function crearParticula() {

    const particula = document.createElement("div");

    particula.className = "particula";

    const iconos = [
        "💗",
        "👸🏻",
        "✨",
        "🤍",
        "💫",
        "🫧"
    ];

    particula.innerHTML =
        iconos[Math.floor(Math.random() * iconos.length)];

    particula.style.left =
        Math.random() * 100 + "vw";

    particula.style.fontSize =
        (15 + Math.random() * 20) + "px";

    particula.style.animationDuration =
        (8 + Math.random() * 7) + "s";

    contenedorParticulas.appendChild(particula);

    setTimeout(() => {
        particula.remove();
    }, 15000);

}

// Generar partículas constantemente
setInterval(crearParticula, 500);

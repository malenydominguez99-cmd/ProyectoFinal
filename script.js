// Datos reales (con imágenes temporales)
const integrantes = [
    {
        nombre: "RM (Kim Namjoon)",
        bio: "Líder del grupo. Rapero, productor y figura clave en la dirección musical de BTS.",
        foto: "https://via.placeholder.com/260x260/9b59b6/ffffff?text=RM"
    },
    {
        nombre: "Jin (Kim Seokjin)",
        bio: "Vocalista. Conocido por su belleza natural y por su carisma dentro y fuera del escenario.",
        foto: "https://via.placeholder.com/260x260/c29eff/ffffff?text=Jin"
    },
    {
        nombre: "Suga (Min Yoongi)",
        bio: "Rapero, productor y compositor. Su estilo introspectivo lo hace único.",
        foto: "https://via.placeholder.com/260x260/bf55ec/ffffff?text=Suga"
    },
    {
        nombre: "J-Hope (Jung Hoseok)",
        bio: "Rapero y bailarín principal. Su energía y luz marcan el estilo del grupo.",
        foto: "https://via.placeholder.com/260x260/d980fa/ffffff?text=J-Hope"
    },
    {
        nombre: "Jimin (Park Jimin)",
        bio: "Vocalista y bailarín. Conocido por su voz dulce y movimientos elegantes.",
        foto: "https://via.placeholder.com/260x260/e6b0ff/ffffff?text=Jimin"
    },
    {
        nombre: "V (Kim Taehyung)",
        bio: "Vocalista. Famoso por su voz profunda y su personalidad artística.",
        foto: "https://via.placeholder.com/260x260/d7a2ff/ffffff?text=V"
    },
    {
        nombre: "Jungkook (Jeon Jungkook)",
        bio: "Vocalista principal. Multitalentoso en canto, baile, video y producción.",
        foto: "https://via.placeholder.com/260x260/8e44ad/ffffff?text=JK"
    }
];

const container = document.getElementById("integrantes-container");

integrantes.forEach((i, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${i.foto}">
        <h3>${i.nombre}</h3>
    `;
    card.addEventListener("click", () => abrirModal(i));
    container.appendChild(card);
});

// --- MODAL ---
const modal = document.getElementById("modal");
const modalFoto = document.getElementById("modalFoto");
const modalNombre = document.getElementById("modalNombre");
const modalBio = document.getElementById("modalBio");
const cerrarModal = document.getElementById("cerrarModal");

function abrirModal(integrante) {
    modalFoto.src = integrante.foto;
    modalNombre.textContent = integrante.nombre;
    modalBio.textContent = integrante.bio;
    modal.classList.remove("hidden");
}

cerrarModal.onclick = () => modal.classList.add("hidden");
modal.onclick = (e) => {
    if (e.target === modal) modal.classList.add("hidden");
};


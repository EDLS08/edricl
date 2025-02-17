const images = document.querySelectorAll(".carousel img");
let index = 0;

// Função para trocar as imagens
function changeImage() {
    // Imagem atual e próxima imagem
    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex];

    // Animação com GSAP (saída da imagem atual e entrada da próxima)
    gsap.to(currentImage, { x: "-100%", opacity: 0, duration: 1 });
    gsap.fromTo(nextImage, { x: "100%", opacity: 0 }, { x: "0%", opacity: 1, duration: 1 });

    // Remove a classe 'active' da imagem atual e adiciona na próxima
    currentImage.classList.remove("active");
    nextImage.classList.add("active");

    // Atualiza o índice
    index = nextIndex;
}

// Troca a imagem a cada 3 segundos (3000ms)
setInterval(changeImage, 3000);


console.log('mostrar o document', document);
const video = document.getElementById("video");
const linkDoVideo = video.src;
const botaoTrailer = (document.querySelector(".botao-trailer"));
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");

function alternarModal() {
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo)
        
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});



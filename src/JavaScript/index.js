const botaoTrailer = document.querySelector(".botao-trailer") ;
const modal = document.querySelector(".modal")
const Fecharmodal = document.querySelector(".fechar-modal")
const video = document.getElementById("video")
const linkVideo = video.src;


botaoTrailer.addEventListener("click",() => {
    modal.classList.add("aberto")
    video.setAttribute("src",linkVideo)
})

Fecharmodal.addEventListener("click",() => {
    modal.classList.remove("aberto")
    video.setAttribute("src","")
})

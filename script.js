function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
    const img = document.querySelector("#profile img")
    if (html.classList.contains("light")) {
        img.setAttribute("src", "./imagens/avatar-light.png")
        img.setAttribute("alt", "Foto da miku no escuro")
    } else {
        img.setAttribute("src", "./imagens/avatar.png")
        img.setAttribute("alt", "Foto da miku no claro")
    }
}
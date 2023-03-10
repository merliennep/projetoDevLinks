function toggleMode() {
  const html = document.documentElement
  // Uso da função toggle, resume a condição para o efeito de transição do modo dark para o light

  html.classList.toggle("light")

  /* Condição para o efeito de transição do modo dark para o light
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  */

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver em light mode, adicionar a imagem light
    img.setAttribute(
      "src",
      "./assets/Avatar-light.png",
      (alt =
        "Foto do Maik Brito com jaqueta preta, ocúlos escuros com fundo degradê azul com roxo.")
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar.png")
  }
}

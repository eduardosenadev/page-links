function toggleMode ()
{
  const html = document.documentElement
  html.classList.toggle('light')

  //Trocar a imagem do perfil

  //Pegar Imagem
  const img = document.querySelector('.profile img')

  //Com light mode
  if (html.classList.contains('light')) {
    img.setAttribute("src", "assets/images/avatar-light.png")
    img.setAttribute("alt", "Foto de Perfil do Eduardo Sena em Light Mode")

    //Sem light mode
  } else {
    img.setAttribute("src", "assets/images/avatar.png")
    img.setAttribute("alt", "Foto de Perfil do Eduardo Sena em Dark Mode")
  }
}
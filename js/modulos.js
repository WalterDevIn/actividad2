document.addEventListener("DOMContentLoaded", () => {

  document.querySelector("nav").innerHTML = `
    <img src="#" alt="Logo">
    <div class="menu">
        <div class="toggle"></div>
        <div class="menu-content">
            <ul>
                <li><a href="index.html">inicio</a></li>
                <li><a href="pizzas.html">pizzas</a></li>
                <li><a href="contacto.html">contacto</a></li>
            </ul>
            <a href="#" class="ordenar">Boton Ordenar</a>
        </div>
    </div>
  `;

  document.querySelector("footer").innerHTML = `
    <p>Footer | Copyright(c) 2025</p>
    <div class="redes">
      <a href="#"><i class="fa-solid fa-instagram"></i></a>
      <a href="#"><i class="fa-solid fa-facebook"></i></a>
      <a href="#"><i class="fa-solid fa-x-twitter"></i></a>
      <a href="#"><i class="fa-solid fa-envelope"></i></a>
    </div>
  `;
  
})

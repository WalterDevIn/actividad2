document.addEventListener("DOMContentLoaded", () => {

  document.querySelector("nav").innerHTML = `
    <figure>
        <img src="../imagenes/favicon.ico" alt="Logo">
        <figcaption>WiPizzas</figcaption>
    </figure>
    <div class="menu">
        <div class="toggle">
            <i class="fa-solid fa-bars"></i>
        </div>
        <div class="menu-content">
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="pizzas.html">Pizzas</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
            <a href="#" class="ordenar">Ordenar</a>
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

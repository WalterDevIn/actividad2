document.addEventListener("DOMContentLoaded", () => {

  document.querySelector("nav").innerHTML = `
    <img src="#" alt="Logo">
    <div>
      <ul>
        <li><a href="index.html">inicio</a></li>
        <li><a href="pizzas.html">pizzas</a></li>
        <li><a href="contacto.html">contacto</a></li>
      </ul>
      <a href="#" class="ordenar">Boton Ordenar</a>
    </div>
  `;

  document.querySelector("footer").innerHTML = `
    <p>Copyright(c) 2025 y demas</p>
    <div class="redes">
      <a href="#"><i class="fa-solid fa-instagram"></i></a>
      <a href="#"><i class="fa-solid fa-facebook"></i></a>
      <a href="#"><i class="fa-solid fa-x-twitter"></i></a>
      <a href="#"><i class="fa-solid fa-envelope"></i></a>
    </div>
  `;
  
})

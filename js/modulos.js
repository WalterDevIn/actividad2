document.addEventListener("DOMContentLoaded", () => {

  document.querySelector("nav").innerHTML = `
    <img>
    <div>
      <ul>
        <li><a href="index.html">inicio</a></li>
        <li><a href="pizzas.html">pizzas</a></li>
        <li><a href="contacto.html">contacto</a></li>
      </ul>
      <a href="#" class="ordenar"></a>
    </div>
  `;

  document.querySelector("footer").innerHTML = `
    <p></p>
    <div class="redes">
      <a href="#"><img></a>
      <a href="#"><img></a>
      <a href="#"><img></a>
      <a href="#"><img></a>
    </div>
  `;
  
})

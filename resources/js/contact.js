/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */
/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */

// HAMBURGER MENU

const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//Metodo : "POST" - empujando info a  una external PUBLIC API - jsonplaceholder

let form = document.querySelector("#form");

let addPost = (e) => {
  // Verificacion y "refrescar" conceptos de semana pasada
  e.preventDefault();
  console.log(e);
  console.log("CTA Connected");
  // Vamos a traernos el valor de los inputs del html
  // let titleOfUserInput = document.querySelector("#title").value;
  // let bodyOfUserInput = document.querySelector("#body").value;
  //Los actuales
  let nameOfInput = document.querySelector("#name").value;
  let emailOfInput = document.querySelector("#email").value;
  let messageOfInput = document.querySelector("#message").value;

  // Uso de fetch para empujar valores del title y el body del formulario al api PUBLICO externo
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      // SYNTAX DE REFERENCIA de pagina web
      // https://jsonplaceholder.typicode.com/guide/
      //   title: "me gusta comprar mucho los bocatas del mercadona",
      //   body: "guilty pleasures",
      //   userId: 1,

      // ------
      // ------
      // ------
      // ------
      // NUESTRO SYNTAX para conectar los inputs de texto + textArea con esta llamada API
      //nombreDeClave CON la variable que guarda el input.value del dom selection
      name: nameOfInput,
      email: emailOfInput,
      body: messageOfInput,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => error);
  // usamos este nuevo metodo reset() para lmpiar los inputs :)
  form.reset();
};

//Definir logica para conectar mediante DOM a elementos de bottones que usamos en clase:
//document.querySelector("#addPost").addEventListener("submit", addPost);
form.addEventListener("submit", addPost);

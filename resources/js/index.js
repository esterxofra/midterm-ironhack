/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */

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

// fetch(`https://jsonplaceholder.typicode.com/`, {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// ADDING TITLES OF THE SECTION

const titlesProjects = document.querySelectorAll(".internal-div-project h3");
let getExternalTitle = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((respuestas) => {
      console.log(respuestas[0].title);
      let infoFromApi = "";
      titlesProjects.forEach((header, index) => {
        header.innerHTML = respuestas[index].title.substring(0, 10);
      });
      return (document.querySelector("#output").innerHTML = infoFromApi);
    })
    .catch((error) => console.log(error));
};
getExternalTitle();

// ADDING TITLES OF THE SECTION
//   const bodyProjects = document.querySelectorAll(".internal-div-project p");
//   console.log(bodyProjects);
//   let getExternalBody = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((respuestas) => {
//         console.log(respuestas[0].body);
//         let infoFromApiTwo = "";
//         titlesProjects.forEach((content, index) => {
//             content.innerHTML = respuestas[index].body;
//             content.innerHTML = content.innerHTML.substring(0, 70);
//         });
//         return (document.querySelector("#output").innerHTML = infoFromApiTwo);
//       })
//       .catch((error) => console.log(error));
//   };
//   getExternalBody();

const getPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((respuesta) => {
      for (let i = 0; i < 3; i++) {
        console.log(respuesta[i]);
        console.log(respuesta[i].title);
        document.querySelector(".external-div-project").innerHTML += `
        <div class="internal-div-project">
          <img class="image-project" src="./resources/images/projects-section/${
            respuesta[i].id
          }.jpg" alt="">
          <h3>${respuesta[i].title.slice(0, 10)}...</h3>
          <p>${respuesta[i].body.slice(0, 50)}</p>
          <button class="learn-more-button" type="button"><a href="project.html">Learn More</a></button>
        </div>
        `;
      }
    })
    .catch();
};

//getPosts()
window.addEventListener("load", getPosts);

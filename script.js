let maan = document.querySelector("h2");

/* Parent div with the id of container */
const parent = document.getElementById("container");

/* Children buttons of container div */
const childBtns = parent.children;

/* Looping through the child array and adding click event to every individual button that change the background of the web page with the text that are written on the button */
for (let i = 0; i < childBtns.length; i++) {
  childBtns[i].addEventListener("click", () => {
    document.body.style.background = childBtns[i].innerHTML;
    maan.style.color = "#fff";
  });
}

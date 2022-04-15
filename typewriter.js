//import Typewriter from "typewriter-effect/dist/core";

var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 80,
});

typewriter.typeString("Hallo, ik ben Elyse.").start();
document.querySelectorAll(".Typewriter__cursor")[0].style.display = "none";

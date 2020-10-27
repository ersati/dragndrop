// Import stylesheets
import "./style.css";
const article = document.querySelectorAll("article");
const m = document.querySelector("#target");
console.log();
function dragstart_handler(ev) {
  // Add the target element's id to the data transfer object
  ev.dataTransfer.setData("application/my-app", ev.target.id);
  ev.dataTransfer.dropEffect = "move";
}
function dragover_handler(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
}
function drop_handler(ev) {
  ev.preventDefault();
  // Get the id of the target and add the moved element to the target's DOM
  const data = ev.dataTransfer.getData("application/my-app");
  ev.target.appendChild(document.getElementById(data));
}
article.forEach(item => {
  item.addEventListener('dragstart', dragstart_handler)
})

m.addEventListener('drop', drop_handler)
m.addEventListener('dragover', dragover_handler)
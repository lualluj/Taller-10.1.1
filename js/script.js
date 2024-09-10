// Array extraño
const strangeArray = [
  "Zero", //esto
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang", //esto
  undefined,
  "Cobol", //esto
  "I'm programmer", //esto
  -2000,
  "Hello world", //esto
  `One is ${1}`,
  { name: "Info", lastname: "last info" }, //esto
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String", //esto
  ["Hola mundo!"],
  "b is a letter", //esto
  "JavaScript", //esto
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  //función que filtra por el valor del tipo de elemento, que tiene que ser un string
    const filtro = strangeArray.filter(element => typeof element === "string"); //se puede usar typeof para filtrar el array y que nos devuelva sólo los string 
    filtro.sort((a,b) => a.localeCompare(b)); // utilicé localeCompare para que ignore si la primera letra es mayúscula o minúscula
    //llamo a la nueva array filtrada y le digo que para cada elemento haga lo que está delcarado en showList pero con los elementos de la nueva array
    filtro.forEach((element)=>showList(filtro));

});

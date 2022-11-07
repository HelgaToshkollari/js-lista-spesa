const listaSpesa = ["pane", "burro", "uova", "farina", "pasta", "olive", "pomodori"];

console.log(listaSpesa);

let i = 0;

while (i < listaSpesa.length) {
    const spesaEl = listaSpesa[i];
    const ul = document.querySelector ("ul");
    ul.innerHTML += `<li>${spesaEl}</li>`;
    i++;
}
console.log(i);
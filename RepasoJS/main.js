alert('hello world!');
var firstName = 'Felipe Serna';
var height = 179;
var concatenation = firstName + ' ' + height;

/*var data = document.getElementById('data');
data.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${firstName}</h2>
    <h3>Mido: ${height} cm</h3>
`;

if (height >= 180) {
  data.innerHTML += '<h1>Eres una persona ALTA</h1>';
} else {
  data.innerHTML += '<h1>Eres una persona BAJITA</h1>';
}

for (var i = 0; i <= 2020; i++) {
    // comentarios
    data.innerHTML += '<h2>Estamos en el año: </h2>' + i;
}*/

function MuestraMiNombre(firstName, height) {
    var myData = `
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es: ${firstName}</h2>
        <h3>Mido: ${height} cm</h3>
    `;
    return myData;
}

function imprimir() {
    var data = document.getElementById('data');
    data.innerHTML = MuestraMiNombre("Felipe Serna B", 180);
}

imprimir();

var nombres = ['Víctor', 'Antonio', 'Joaquin'];

document.write('<h1>Listado de nombres</h1>');
/*
for (i = 0; i < nombres.length; i++) {
    document.write(nombres[i] + '<br/>');
}
*/
nombres.forEach((nombre) => {
    document.write(nombre + '<br/>');
});

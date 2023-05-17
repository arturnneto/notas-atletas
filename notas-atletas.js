// Array que fornece as informações
let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];


// Função que trabalha o array
function retornarAtletas(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].notas.sort(function(x, y) { return x - y});
    let notasDaMedia = array[i].notas.slice(1,4);
    console.log(`Atleta: ${array[i].nome}
Notas Obtidas: ${array[i].notas}
Média Válida: ${((notasDaMedia.reduce((x, y) => x + y)) / notasDaMedia.length)}
`);
  };
};


// Console.log do resultado
console.log(retornarAtletas(atletas))

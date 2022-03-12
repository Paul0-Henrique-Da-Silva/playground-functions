// Desafio 1

function compareTrue(valor,valor2 ) {
  if(valor === true && valor2 === true){condicao = true }
  else [condicao = false]
 return condicao
}
/*      OOOOOOOOUUUUU
if(valor1 == true && valor2  == true){result = true}
else if (valor1 == false && valor2 == true){result = false}
else if (valor1 == true && valor2 == false){result = false} 
else if (valor1 == false && valor2 == false){result = false}
else if(valor1 != true && valor2 !== true){result = false}
*/

//iniciando proje
// Desafio 2
function calcArea(base, height) {
//let vezesArea =  base * height 
//let  total = vezesArea / 2
  // seu código aqui
let total = (base * height) / 2
  return total
}

// Desafio 3
function splitSentence(string) {
  let arrayDeSplit = string.split(' ') 
  // seu código aqui
 //return  resultado = string.split('')
  return arrayDeSplit;
}
//splitSentence('vai chapeco')
// Desafio 4

function concatName(itens) {
  //if (itens.length >= 3){ itensConcat = itens[0] + itens[3]}
  //else if (itens.length >= 2 )
  //{itensConcat = itens[0] + itens[2]}
  //else (itens == itens[0] && itens == itens[2])
  //{itensConcat = itens[0] + itens[2]}
  //return citensConcat
  // seu código aqui
  let results = itens[itens.length -1] + ", " +  itens[0]  ;
  return results
}

// Desafio 5
function footballPoints(wins , ties) {
 
    if(wins*3 + ties >= 50){return pontos = 50}
    else if (wins*3 + ties >= 5 ){return pontos = 5}
    else if (wins*3 + ties == 0) {return pontos = 0}
   
  // seu código aqui
}
//footballPoints(18,8)


// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

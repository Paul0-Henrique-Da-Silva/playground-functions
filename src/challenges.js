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
  return total;
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
let array = [4,6,7,3,6,3,9,9]
let repeti = []
for (let i = 0; i < array.length; i+=1){
   for (let i2 = 0;i2 < array.lenght; i2+=1){
     if(array[i] == array[i2].t && array[i] >= array[i2])
     {repeti.push(array[i2])}
   }
  }
     console.log(repeti)
}   


//  }
//  return repeti
//}
 //let numeroR =[]
 //for (index = 0; index > array.lenght; index ++){
 //  if (array.lenght[index] === array.Math.max(...array)) {
 //    numerosR += array.lenght[index];
//   }
// }
 ///return console.log(numerosR)
///}
//highestCount(1,14,13,16,13)
//}

// Desafio 7 cat1 6,cat2 12 retorn cat1 
function catAndMouse(mouse,cat1,cat2) {
 let vCat1 = Math.abs(cat1 - mouse)
 let vCat2 = Math.abs(cat2 - mouse)
if (vCat1 < vCat2) {return  "cat1"}
else if (vCat2 < vCat1) { return "cat2" }
else { return "os gatos trombam e o rato foge"}

}
  //if(mouse < cat2 && mause < cat1){pegou =  console.log("cat1")}
//else if (cat2 < cat1 && mause <= cat2){pegou = console.log("cat2")}
//else if (cat1 == mause && cat2 == mause) {pegou = console.log("os gatos trombam e o rato foge")}
//return pegou  
// seu código aqui 



// Desafio 8
//function addArray(...array){
//console.log(array)
//}
//addArray(0,1,2,3)
function fizzBuzz(array) {
  // seu código aqui
 //let array;
 let string = []
  for (let i = 0; i < array.length; i += 1){
    if(array[i] % 3 === 0 && array[i] % 5 === 0){string.push("fizzBuzz")}
    else if(array[i] % 3 === 0) {string.push("fizz")}  
    else if(array[i] % 5 === 0){string.push("buzz")}
    else string.push("bug!")
}
return string
}
//console.log(fizzBuzz([12,14,17,25,2]))
// console.log(string)
//fizzBuzz(3,5,15,14)
//fizzBuzz()

// Desafio 9
function encode(string) {

  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
//["React", "Jest", "HTML", "CSS", "JavaScript"]
//"Lucas"
function techList() {
  
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

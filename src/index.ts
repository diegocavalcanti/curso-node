console.log("Estruturas de Repetição");

console.log("### For ### Sei quantidade alteracoes");
for (let i = 0; i < 10; i++) {
  console.warn(i);
}

console.log("### While ### Não sei a quantidade de interações");
let i = 0;
while (i < 10) {
  console.warn(i);
  i += 1;
}

console.log("### Do While ### Não sei a quantidade de interações");
let x = 0;
do {
  console.warn(x);
  x += 1;
} while (x < 10);

console.log("### For IN ####");
const pessoa = {nome:"Bruno", idade: 42, ehProfessor:true}
for (let chave in pessoa){
    console.log(chave);
}


console.log("### For OF ####");
const pessoas = [
    {nome:"Bruno", idade: 42, ehProfessor:true},
    {nome:"Joana", idade: 35, ehProfessor:false}

]
for (const p of pessoas){
    console.log(p);
}

console.log("### For Each ####");
pessoas.forEach( p => console.log(p))
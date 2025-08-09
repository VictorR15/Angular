//VARIABLE QUE ACEPTA UN SOLO TIPO DE VALOR
const name: string = "Strider";
//VARIABLE QUE ACEPTA DOS TIPOS DE VALORES
let hpPoints: number | "FULL" = 95;
hpPoints = "FULL";
const isAlive: boolean = true;

console.log({
  name,
  hpPoints,
  isAlive,
});

export {};

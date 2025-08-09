//ESTE ES UN ARREGLO DE TIPO STRING
const skills: string[] = ["bash", "counter", "healing"];

//LA INTERFACE SON LOS TIPOS QUE LE QUEREMOS DAR AL OBJETO "strider"
interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

//ESTE OBJETO TIENE ASIGANDO LOS TIPOS DE LA INTERFACE
const strider: Character = {
  name: "Strider",
  hp: 100,
  skills: ["bash", "counter"],
};

console.table(strider);

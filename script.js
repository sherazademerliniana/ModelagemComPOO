import { Pessoa } from "./Classes/Pessoa.js"
import { Elevador } from "./Classes/Elevador.js"
import { Televisao } from "./Classes/Televisao.js"

let gustavo = new Pessoa("gustavo", "09/02/2000", "Boa Vista")
let jason = new Pessoa("jason", "03/04/1999", "Lorena")
let camila = new Pessoa("camila", "02/09/1997", "Austacia")

console.log(jason)
console.log(camila)
console.log(gustavo);

let elevador = new Elevador(2, 2);


elevador.entrar(gustavo);
elevador.entrar(jason)
elevador.entrar(camila)

elevador.sair(gustavo);
elevador.entrar(camila);
console.log(elevador);

let televisao = new Televisao;
televisao.aumentarVolume();
televisao.aumentarVolume();
televisao.aumentarVolume();
televisao.aumentarCanal();
televisao.diminuirVolume();
televisao.trocarCanal(20);
console.log(televisao);
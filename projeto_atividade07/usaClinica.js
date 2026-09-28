import Cliente from "./objetos/Cliente.js";
import Animal from "./objetos/Animal.js";
import Prontuario from "./objetos/Prontuario.js";
import Veterinario from "./objetos/Veterinario.js";

let cliente = new Cliente("João Silva", "61999999999");

let animal1 = new Animal("Rex", "Cachorro");
let animal2 = new Animal("Luna", "Gato");

let prontuario1 = new Prontuario(1, "Animal saudável");
let prontuario2 = new Prontuario(2, "Vacinação em dia");

let veterinario1 = new Veterinario("Carlos", "12345");
let veterinario2 = new Veterinario("Mariana", "67890");

cliente.addAnimal(animal1);
cliente.addAnimal(animal2);

animal1.setProntuario(prontuario1);
animal2.setProntuario(prontuario2);

veterinario1.addAnimal(animal1);
veterinario1.addAnimal(animal2);

veterinario2.addAnimal(animal1);

console.log("Cliente:");
console.log(cliente.getNome());
console.log(cliente.getTelefone());

console.log("\nAnimais:");
console.log(animal1.getNome());
console.log(animal2.getNome());

console.log("\nProntuário do Rex:");
console.log(animal1.getProntuario().getNumero());
console.log(animal1.getProntuario().getObservacoes());

console.log("\nProntuário da Luna:");
console.log(animal2.getProntuario().getNumero());
console.log(animal2.getProntuario().getObservacoes());

console.log("\nVeterinários do Rex:");
animal1.listarVeterinarios();

console.log("\nVeterinários da Luna:");
animal2.listarVeterinarios();

console.log("\nAnimais do veterinário Carlos:");
for (let animal of veterinario1.getAnimais()) {
    console.log(animal.getNome());
}

console.log("\nAnimais do veterinário Mariana:");
for (let animal of veterinario2.getAnimais()) {
    console.log(animal.getNome());
}

console.log("\nCliente do Rex:");
console.log(animal1.getCliente().getNome());

console.log("\nAnimal do prontuário 1:");
console.log(prontuario1.getAnimal().getNome());

cliente.listarAnimais();
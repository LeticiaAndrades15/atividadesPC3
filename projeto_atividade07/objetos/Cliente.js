import Animal from "./Animal.js";

export default class Cliente {
    #nome;
    #telefone;
    #animais;

    constructor(nome, telefone) {
        this.#nome = nome;
        this.#telefone = telefone;
        this.#animais = [];
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    getTelefone() {
        return this.#telefone;
    }

    setTelefone(telefone) {
        this.#telefone = telefone;
    }

    getAnimais() {
        return this.#animais;
    }

    setAnimais(animais) {
        this.#animais = animais;
    }

    addAnimal(animal) {
        if (animal instanceof Animal) {
            this.#animais.push(animal);
            animal.setCliente(this);
        }
    }

    listarAnimais() {
        console.log("Cliente: " + this.#nome);
        console.log("Animais:");

        for (let animal of this.#animais) {
            console.log(animal.getNome());
        }
    }
}


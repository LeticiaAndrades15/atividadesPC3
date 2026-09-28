import Cliente from "./Cliente.js";
import Prontuario from "./Prontuario.js";
import Veterinario from "./Veterinario.js";

export default class Animal {
    #nome;
    #especie;
    #cliente;
    #prontuario;
    #veterinarios;

    constructor(nome, especie) {
        this.#nome = nome;
        this.#especie = especie;
        this.#cliente = null;
        this.#prontuario = null;
        this.#veterinarios = [];
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    getEspecie() {
        return this.#especie;
    }

    setEspecie(especie) {
        this.#especie = especie;
    }

    getCliente() {
        return this.#cliente;
    }

    setCliente(cliente) {
        if (cliente instanceof Cliente) {
            this.#cliente = cliente;
        }
    }

    getProntuario() {
        return this.#prontuario;
    }

    setProntuario(prontuario) {
        if (prontuario instanceof Prontuario) {
            this.#prontuario = prontuario;
            prontuario.setAnimal(this);
        }
    }

    getVeterinarios() {
        return this.#veterinarios;
    }

    addVeterinario(veterinario) {
        if (veterinario instanceof Veterinario) {
            this.#veterinarios.push(veterinario);

            if (!veterinario.getAnimais().includes(this)) {
                veterinario.addAnimal(this);
            }
        }
    }

    listarVeterinarios() {
        for (let veterinario of this.#veterinarios) {
            console.log(veterinario.getNome());
        }
    }
}


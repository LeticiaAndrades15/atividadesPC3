export default class Endereco {
    #complemento;
    #ddd;
    #estado;
    #cep;
    #logradouro;
    #bairro;
    #cidade;
    #uf;

    async setCep(cep) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`Erro ao buscar CEP: ${resposta.status}`);
        }

        const dados = await resposta.json();

        if (dados.erro) {
            throw new Error("CEP não encontrado na base do ViaCEP.");
        }

        this.#complemento = dados.complemento;
        this.#ddd = dados.ddd;
        this.#estado = dados.estado;
        this.#cep = dados.cep;
        this.#logradouro = dados.logradouro;
        this.#bairro = dados.bairro;
        this.#cidade = dados.localidade;
        this.#uf = dados.uf;
    }

    getComplemento() {
        return this.#complemento;
    }
    
    getDdd() {
        return this.#ddd;
    }
    
    getEstado() {
        return this.#estado;
    }

    getCep() {
        return this.#cep;
    }

    getLogradouro() {
        return this.#logradouro;
    }

    getBairro() {
        return this.#bairro;
    }

    getCidade() {
        return this.#cidade;
    }

    getUf() {
        return this.#uf;
    }

    mostrarEnderecoCompleto() {
        return `${this.#logradouro}, ${this.#bairro}, ${this.#cidade} - ${this.#uf}`;
    }
}
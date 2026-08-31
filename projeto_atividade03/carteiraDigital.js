class CarteiraDigital{
    #titular;
    #saldo;

    constructor(){
        this.#saldo = 0;
        this.#titular = "Não definido.";
    }

    definirTitular(nome){
        if(nome && nome.trim() !== ""){
            this.#titular = nome;
            return true;
        }else{
            return false;
        }
    }

    consultarTitular(){
        console.log(`O ${this.#titular} é o titular dessa conta!`);
        return true;
    }

    depositar(valor){
        if(valor>0){
            this.#saldo += valor;
            console.log(`O valor de R$${valor} foi depositado na conta do titular ${this.#titular}`);
            return true;
        }else{
            console.log(`Erro no deposito!`);
            return false;
        }
    }

    sacar(valor){
        if(this.#saldo>=valor){
            this.#saldo -= valor;
            console.log(`Voce acabou de realizar um saque no valor de R$${valor}`);
            return true;
        }else{
            console.log(`Saldo insuficiente!`);
            return false;
        }
    }

    consultarSaldo(){
        console.log(`Saldo disponivel: R$${this.#saldo}`);
        return true;
    }

    exibirInformacoes(){
        console.log(`Exibindo informacoes abaixo:`);
        console.log(`Titular: ${this.#titular}`);
        console.log(`Saldo disponivel: R$${this.#saldo}`);

    }
}

export default CarteiraDigital;
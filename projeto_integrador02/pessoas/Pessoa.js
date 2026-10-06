import {validarCPF, validarEmail} from '../../projeto_integrador01/biblioteca/util.js';

class Pessoa{
    #nome;
    #email;
    #CPF;

    setNome(nome){
        if(nome){
            this.#nome = nome;
            return true;
        }else{
        return false;
        }
    }

    getNome(){
        return this.#nome;
    }

    setCPF(cpf){
        if(validarCPF(cpf)){
            this.#CPF = cpf;
            return true;
        }else{
            return false;
        }
    }

    getCPF(){
        return this.#CPF;
    }

    setEmail(email){
        if(validarEmail(email)){
            this.#email = email;
            return true;
        }else{
            return false;
        }
    }

    getEmail(){
        return this.#email;
    }

}

export default Pessoa;
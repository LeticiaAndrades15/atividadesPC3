import Pessoa from './Pessoa.js';

class PJ extends Pessoa{
    #cnpj;
    #razaoSocial;

    setCNPJ(cnpj){
        if(cnpj){
            this.#cnpj = cnpj;
            return true;
        }else{
            return false;
        }
    }

    getCNPJ(){
        return this.#cnpj;
    }

    setRazaoSocial(razaoSocial){
        if(razaoSocial){
            this.#razaoSocial = razaoSocial;
            return true;
        }else{
            return false;
        }
    }

    getRazaoSocial(){
        return this.#razaoSocial;
    }
}

export default PJ;
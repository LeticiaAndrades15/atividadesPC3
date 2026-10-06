import Pessoa from './Pessoa.js';
import {validarMatricula} from '../biblioteca/util.js';

class Aluno extends Pessoa{
    #matricula;

    setMatricula(matricula){
        if(validarMatricula(matricula)){
            this.#matricula = matricula;
            return true;
        }else{
            return false;
        }
    }

    getMatricula(){
        return this.#matricula;
    }
}

export default Aluno;
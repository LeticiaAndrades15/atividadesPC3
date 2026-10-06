import Pessoa from './Pessoa.js';

class Professor extends Pessoa{
    #disciplina

    setDisciplina(disciplina){
        if(disciplina){
            this.#disciplina = disciplina;
            return true;
        }else{
            return false;
        }
    }

    getDisciplina(){
        return this.#disciplina;
    }

    setEmail(email) {
        if(email.endsWith(".edu.br")){
            super.setEmail(email);
            return true;
        }else{
            return false;
        }
    }

    getEmail(){
        return super.getEmail();
    }
}

export default Professor;
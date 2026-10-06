import Aluno from './pessoas/Aluno.js';
import Professor from './pessoas/Professor.js';
import Pessoa from './pessoas/Pessoa.js';


function mostrarDados(objeto){
    console.log("Nome: ", objeto.getNome());
    console.log("Email: ", objeto.getEmail());
    console.log("CPF: ", objeto.getCPF());

    if(objeto.getMatricula){
        console.log("Matricula: ", objeto.getMatricula());
    }

    if(objeto.getDisciplina){
        console.log("Disciplina: ", objeto.getDisciplina());
    }
}


const alu = new Aluno();
const prof = new Professor();
const pess = new Pessoa();

const alu1 = new Aluno();
const prof1 = new Professor();
const pess1 = new Pessoa();

pess.setNome("Leticia");
pess.setCPF("52998224725");
pess.setEmail("leticia@gmail.com");

prof.setNome("Arthur");
prof.setEmail("arthur@ifb.edu.br");
pess.setCPF("52998224725");
prof.setDisciplina("Matematica");

alu.setNome("Carol");
alu.setEmail("carol@gmail.com");
pess.setCPF("52998224725");
alu.setMatricula(12345678);

pess1.setNome("Maria");
pess1.setCPF("12345678910");
pess1.setEmail("maria@ifb.edu.com");

prof1.setNome("henzo");
prof1.setEmail("henzo@gmail.com");
pess.setCPF("52998224725");
prof1.setDisciplina("PC3");

alu1.setNome("Karina");
alu1.setEmail("karina123");
pess.setCPF("52998224725");
alu1.setMatricula(5778900);

console.log(pess.getNome());
console.log(pess.getCPF());
console.log(pess.getEmail());
mostrarDados(pess);

console.log(prof.getNome());
console.log(prof.getCPF());
console.log(prof.getEmail());
mostrarDados(prof);

console.log(alu.getNome());
console.log(alu.getCPF());
console.log(alu.getEmail());
mostrarDados(alu);

console.log(pess1.getNome());
console.log(pess1.getCPF());
console.log(pess1.getEmail());
mostrarDados(pess1);

console.log(prof1.getNome());
console.log(prof1.getCPF());
console.log(prof1.getEmail());
mostrarDados(prof1);

console.log(alu1.getNome());
console.log(alu1.getCPF());
console.log(alu1.getEmail());
mostrarDados(alu1);
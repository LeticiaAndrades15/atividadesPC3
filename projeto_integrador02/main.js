import PJ from "./pessoas/PJ.mjs";
import IEclss, { IEfunc, IEjson } from "./objetos/IE.mjs";


const pj1 = new PJ();

pj1.setNome("Empresa Alpha");
pj1.setEmail("alpha@gmail.com");
pj1.setCNPJ("12345678000100");
pj1.setRazaoSocial("Empresa Alpha LTDA");


const pj2 = new PJ();

pj2.setNome("Empresa Beta");
pj2.setEmail("beta@gmail.com");
pj2.setCNPJ("98765432000100");
pj2.setRazaoSocial("Empresa Beta LTDA");


const ie1 = new IEclss(
    "123456789",
    "GO",
    new Date()
);

ie1.setPJ(pj1);


const ie2 = IEfunc(
    "987654321",
    "DF",
    new Date()
);

ie2.setPJ(pj2);


IEjson.numero = "456789123";
IEjson.estado = "SP";
IEjson.dataRegistro = new Date();

IEjson.setPJ(pj1);


function mostrarPJ(pj) {
    console.log("=== Pessoa Jurídica ===");
    console.log("Nome:", pj.getNome());
    console.log("E-mail:", pj.getEmail());
    console.log("CNPJ:", pj.getCNPJ());
    console.log("Razão Social:", pj.getRazaoSocial());
}


function mostrarIE(ie) {
    console.log("=== Inscrição Estadual ===");
    console.log("Número:", ie.getNumero());
    console.log("Estado:", ie.getEstado());
    console.log(
        "Data de Registro:",
        ie.getDataRegistro().toLocaleString("pt-BR")
    );

    const pj = ie.getPJ();

    console.log("Pessoa Jurídica:", pj.getRazaoSocial());

    console.log("-----------------------------");
}


mostrarPJ(pj1);
console.log();

mostrarPJ(pj2);
console.log();


mostrarIE(ie1);
mostrarIE(ie2);
mostrarIE(IEjson);


const objetoInvalido = {
    nome: "Não sou uma PJ"
};

console.log("PJ inválida:", ie1.setPJ(objetoInvalido));
console.log("PJ válida:", ie1.setPJ(pj2));
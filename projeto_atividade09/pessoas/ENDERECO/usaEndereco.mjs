
import Endereco from './Endereco.mjs';

async function usaEndereco() {
    const end = new Endereco();

    try {
        await end.setCep("72015565");

        console.log("CEP:", end.getCep());
        console.log("Logradouro:", end.getLogradouro() || "Não informado");
        console.log("Bairro:", end.getBairro() || "Não informado");
        console.log("Cidade:", end.getCidade() || "Não informado");
        console.log("UF:", end.getUf() || "Não informado");

        console.log("Complemento:", end.getComplemento() || "Não informado");
        console.log("DDD:", end.getDdd() || "Não informado");
        console.log("Estado:", end.getEstado() || "Não informado");

        console.log("Endereço completo:", end.mostrarEnderecoCompleto());

    } catch (erro) {
        console.error("Erro ao definir CEP:", erro.message);
    }
}

usaEndereco();

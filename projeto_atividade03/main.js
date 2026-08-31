import CarteiraDigital from './carteiraDigital.js';

const carteira = new CarteiraDigital();

carteira.definirTitular('Leticia Andrades');
carteira.depositar(1000);

carteira.consultarSaldo();

carteira.sacar(159.99);
carteira.exibirInformacoes();
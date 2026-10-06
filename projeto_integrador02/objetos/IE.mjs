import PJ from '../pessoas/PJ.mjs';

class IEclss {

    #numero;
    #estado;
    #dataRegistro;
    #pj;

    constructor(numero, estado, dataRegistro) {
        this.#numero = numero;
        this.#estado = estado;
        this.#dataRegistro = dataRegistro;
    }

    getNumero() {
        return this.#numero;
    }

    getEstado() {
        return this.#estado;
    }

    getDataRegistro() {
        return this.#dataRegistro;
    }

    setPJ(pj) {
        if (pj instanceof PJ) {
            this.#pj = pj;
            return true;
        }

        return false;
    }

    getPJ() {
        return this.#pj;
    }
}

function IEfunc(numero, estado, dataRegistro) {

    let pj;

    return {

        getNumero() {
            return numero;
        },

        getEstado() {
            return estado;
        },

        getDataRegistro() {
            return dataRegistro;
        },

        setPJ(novaPJ) {
            if (novaPJ instanceof PJ) {
                pj = novaPJ;
                return true;
            }

            return false;
        },

        getPJ() {
            return pj;
        }
    };
}

const IEjson = {

    numero: null,
    estado: null,
    dataRegistro: null,
    pj: null,

    getNumero() {
        return this.numero;
    },

    getEstado() {
        return this.estado;
    },

    getDataRegistro() {
        return this.dataRegistro;
    },

    setPJ(pj) {
        if (pj instanceof PJ) {
            this.pj = pj;
            return true;
        }

        return false;
    },

    getPJ() {
        return this.pj;
    }
};

export default IEclss;
export { IEfunc, IEjson };
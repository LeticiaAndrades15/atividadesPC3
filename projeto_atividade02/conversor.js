class Conversor{
    constructor (){

    }

    celsiusParaFahrenheit(celsius){
        let celsiusParaFahrenheit = (9/5) * celsius + 32;
        return celsiusParaFahrenheit;
    }

    kmParaMilhas(km){
        let kmParaMilhas = km * 0.621371;
        return kmParaMilhas;
    }

    minutosParaHoras(minutos){
        let minutosParaHoras = minutos/60;
        return minutosParaHoras;
    }
}

export {Conversor}
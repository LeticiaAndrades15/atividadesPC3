function celsiusParaFahrenheit(celsius){
  let fahrenheit = (9/5) * celsius + 32;
  return fahrenheit;
}

function horasParaMinutos(horas){
  let minutos = horas * 60;
  return minutos;
}

function idadeEmDias(idade){
  let dias = idade * 365;
  return dias;
}

function kmParaMetros(km){
  let metros = km * 1000;
  return metros;
}

function consumoMedio(distancia, litros){
  let consumo = distancia / litros;
  return consumo;
}

module.exports = { celsiusParaFahrenheit, horasParaMinutos, idadeEmDias, kmParaMetros, consumoMedio }
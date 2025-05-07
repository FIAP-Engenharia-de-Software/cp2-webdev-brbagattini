// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)
function calcularIMC(peso, altura) {
  IMC = peso / (altura * altura)
  if (IMC < 18.5){
    return "Abaixo do peso"
  } else if (IMC >= 18.5 && IMC < 25){
    return "Peso normal"
  } else if (IMC >= 25 && IMC < 29.9){
    return "Sobrepeso"
  } else if (IMC >= 30){
    return "Obesidade"
  } else {
    return 'Erro'
  }
}

// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularIMC };
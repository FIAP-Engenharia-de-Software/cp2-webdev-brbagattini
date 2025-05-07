// ## Corrigir Valor Numérico **(1 ponto)**

// **Enunciado:**

// Crie a função corrigirValor, que recebe um valor e tenta convertê-lo para número. Se não for possível, retorne `"Valor inválido"`.

function corrigirValor(valor) {
  ver = parseInt(valor)
  if (typeof(ver) == "number") {
    return parseFloat(valor)
  } else {
    return "Valor inválido"
  }
}

console.log(corrigirValor('11tr'))
//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { corrigirValor };
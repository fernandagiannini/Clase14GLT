/*
function CalculateTotal(items, tax, discount) {
    var VALOR_TOTAL = 0;
    for(var i = 0; i < items.length; i++) {
      VALOR_TOTAL += items[i];
    }
    VALOR_TOTAL += VALOR_TOTAL * tax;
    if(discount) {
      VALOR_TOTAL -= VALOR_TOTAL * discount;
    }
    return VALOR_TOTAL.toFixed(2);
  }
  
  var items = [10, 20, 30];
  var tax = 0.05;
  var discount = 0.10;
  
  var ElprOFeEstuvo_aQui = CalculateTotal(items, tax, discount);
  console.log("Total: " + ElprOFeEstuvo_aQui);
  */

function calculateTotal(items, tax, discount) {
  let sumValores = 0;
  let valoresConTax = 0;
  let valorTotal = 0;
  for (let i = 0; i < items.length; i++) {
    sumValores += items[i];
  }
  valoresConTax += sumValores + (sumValores * tax);
  console.log(valoresConTax)
  if (discount) {
    valorTotal = valoresConTax - (valoresConTax * discount);
    console.log(valorTotal)
  } else {
    valorTotal = valoresConTax
  }
  return valorTotal.toFixed(2);
}

const items = [10, 20, 30];
let tax = 0.05;
let discount = 0.1;

let totalValue = calculateTotal(items, tax, discount);
console.log(`Total: ${totalValue}`);

function comprar() {
    const preco = 20;
    const quantidade = parseInt(document.getElementById('quantidade').value); //parseint transformar saida=texto em inteiro
    let total = preco * quantidade;  //soamando preco e quantidade 

    if (quantidade >= 5) {
      total *= 0.9; //0.9 desconto de 10%
    }

    document.getElementById('resultado').innerText = 
      `Total a pagar: R$ ${total.toFixed(2).replace('.', ',')}`;
  }
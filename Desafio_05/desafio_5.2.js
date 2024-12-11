let dados = ["Funko Pop:10", "Action Figure:3", "Lego Star Wars:15"]
let resultado = [];

//TODO: Crie uma função 'dados.forEach(item =>{' para a implementação da condição de verificação de estoque.

  dados.forEach(item => {

    let [nome, quantidade] = item.split(":");
    quantidade = parseInt(quantidade);

    // //TODO: Realize a verificação utilizando if/else:
    if(quantidade < 5) {
      resultado.push(nome + ": Baixo")
    } else {
      resultado.push(nome + ": Adequado")
    }
    
});

// Saída formatada corretamente
console.log(resultado.join(", "));
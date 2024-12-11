// Classe que calcula o frete com base na taxa fixa e taxa por produto
class CalculadoraFrete {

    constructor(taxaFixa, taxaPorProduto) {
       // TODO: Armazene a taxa fixa de frete na propriedade `taxaFixa`:
        this.taxaFixa = taxaFixa;
        
       // TODO: Armazenar a taxa por produto na propriedade `taxaPorProduto`
        this.taxaPorProduto = taxaPorProduto;
    }

    calcularFrete(listaProdutos) {
        const produtos = listaProdutos.split(', ');
        
        const quantidadeTotal = produtos.reduce((total, produto) => {
            const quantidade = parseInt(produto.split(':')[1], 10);
            return total + quantidade;
        }, 0);

        // TODO: Calcule o valor total do frete:
        const freteTotal = this.taxaFixa + (this.taxaPorProduto * quantidadeTotal);
        
        // TODO: TODO: Retorne o valor do frete formatado com duas casas decimais:
        return freteTotal.toFixed(2);
    }
}

// Função principal para obter os dados de entrada e imprimir o resultado
function main() {

    const listaProdutos = "Board Game:1, Miniatura:4";
    
    const taxaFixa = parseFloat(8.50);
    
    const taxaPorProduto = parseFloat(2.50);
    
    const calculadora = new CalculadoraFrete(taxaFixa, taxaPorProduto);
    
    console.log(calculadora.calcularFrete(listaProdutos));
}

// Chamar a função principal para executar o desafio
main();
function verificarPromocoes() {
    // TODO: Defina uma constante taxaDesconto com valor 0.10, que representa uma taxa de desconto de 10%:
        
        const entrada = "Drone: 2, 150.00 - Carro de Controle Remoto: 5, 200.00"; 
        const produtos = entrada.split(" - ") 
        const resultado = [];
    
        produtos.forEach(produto => {
            const [nome, quantidadePreco] = produto.split(': '); 
            const [quantidade, precoUnitario] = quantidadePreco.split(', ').map(Number); 
    
            const taxaDesconto = 0.10;
            let precoFinal;
    
            // TODO: Verifique se a quantidade é maior ou igual a 5 e aplicar o desconto se necessário
            
                if (quantidade >= 5) {
                    precoFinal = precoUnitario * (1 - taxaDesconto);
                } else {
                    precoFinal = precoUnitario;
                }
            
            resultado.push(`${nome}: ${precoFinal.toFixed(2)}`);
        });
    
        console.log(resultado.join(' - '));
    }
    
    // TODO: Chame a função:
    verificarPromocoes();
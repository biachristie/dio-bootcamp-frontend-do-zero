// Recebe a faixa etária recomendada
const idade = parseInt(4);

let categoria;

// TODO: Verifique a faixa etária e defina a categoria correspondente
if (idade >= 0 && idade <= 9) {
    categoria = "Infantil";
} else if (idade > 9 && idade <= 14) {
    categoria = "Pre-Adolescente";
} else if (idade > 14 && idade <= 18) {
    categoria = "Adolescente";
}

// Exibe o resultado no console
console.log(categoria);
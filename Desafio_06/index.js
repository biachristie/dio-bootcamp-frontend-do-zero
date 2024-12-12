const readLine = require("readline");

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

let name = "";

rl.question("Insira o nome do herói: " , (heroName) => {
    name = heroName;
    
    rl.question("Insira o nível de experiência do herói: " , (heroLevel) => {
        let rank = getRank(heroLevel);
        console.log(`O herói de nome ${ name } está no nível ${ rank }`);
        rl.close();
    })
})

function getRank(level) {
    if(level <= 1000) {
        return "Ferro";
    } else if(level > 1000 & level <= 2000) {
        return "Bronze";
    } else if(level > 2000 & level <= 5000) {
        return "Prata";
    } else if(level > 5000 & level <= 7000) {
        return "Ouro";
    } else if(level > 7000 & level <= 8000) {
        return "Platina";
    } else if(level > 8000 & level <= 9000) {
        return "Ascendente";
    } else if(level > 9000 & level <= 10000) {
        return "Imortal";
    } else if(level > 10000) {
        return "Radiante";
    }
}
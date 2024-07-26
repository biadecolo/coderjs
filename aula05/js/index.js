// Função para calcular o preço com ICMS
const calculatePriceWithICMS = (costPrice, icmsRate) => {
    const icmsAmount = costPrice * icmsRate;
    return costPrice + icmsAmount;
};

// Função principal para obter o preço de custo do usuário e exibir o preço com ICMS
const processICMSCalculation = () => {
    const costPrice = parseFloat(prompt("Insira o preço de custo:"));
    const icmsRate = 0.3; // 30%

    const finalPrice = calculatePriceWithICMS(costPrice, icmsRate);

    document.getElementById('meuParagrafo').innerHTML = (`Preço de custo: R$ ${costPrice.toFixed(2)}\nTaxa de ICMS: ${icmsRate * 100}%\nPreço com ICMS: R$ ${finalPrice.toFixed(2)}`);
};

// Chama a função principal
processICMSCalculation();
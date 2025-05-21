// Taxas de câmbio aproximadas (apenas para demonstração)
const taxas = {
    USD: 5.00, // 1 USD = 5.00 BRL
    EUR: 5.50  // 1 EUR = 5.50 BRL
};

// Função para converter (chamada pelo onclick no HTML)
function converter() {
    // Obter referências dentro da função, pois ela é chamada diretamente
    const valorInput = document.getElementById('iNvalor_real');
    const moedaSelect = document.getElementById('SLTmoeda_Convercao');
    const convertidoInput = document.getElementById('iNvalor_convertido');

    const valorReal = parseFloat(valorInput.value);
    const moeda = moedaSelect.value;

    // Validar o valor de entrada
    if (isNaN(valorReal) || valorReal <= 0) {
        convertidoInput.value = "Valor inválido";
        return;
    }

    let valorConvertido;
    let simbolo;

    // Realizar a conversão
    if (moeda === 'USD') {
        valorConvertido = valorReal / taxas.USD;
        simbolo = 'USD';
    } else if (moeda === 'EUR') {
        valorConvertido = valorReal / taxas.EUR;
        simbolo = 'EUR';
    } else {
        convertidoInput.value = "Moeda não suportada";
        return;
    }

    // Exibir o resultado formatado (com 2 casas decimais)
    convertidoInput.value = `${valorConvertido.toFixed(2)} ${simbolo}`;
}

// Função para limpar os campos (chamada pelo onclick no HTML)
function limpar() {
    // Obter referências dentro da função
    const valorInput = document.getElementById('iNvalor_real');
    const convertidoInput = document.getElementById('iNvalor_convertido');
    const moedaSelect = document.getElementById('SLTmoeda_Convercao');

    valorInput.value = '';
    convertidoInput.value = '';
    moedaSelect.value = 'USD'; // Resetar para o padrão
}

// Opcional: Adicionar listener para Enter no campo de valor, se desejar
document.addEventListener('DOMContentLoaded', () => {
    const valorInput = document.getElementById('iNvalor_real');
    if (valorInput) {
        valorInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // Evitar submissão do formulário
                converter(); // Chama a função converter()
            }
        });
    }
});

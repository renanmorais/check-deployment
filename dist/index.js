console.log('Hello, GitHub Deployment!');
console.log('Aplicação rodando com sucesso!');

// Função simples para demonstrar funcionalidade
function checkDeployment() {
    const timestamp = new Date().toISOString();
    console.log(`Deployment verificado em: ${timestamp}`);
    return true;
}

// Exportar para possível uso em testes
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {checkDeployment};
}

// Executar se for chamado diretamente
if (require.main === module) {
    checkDeployment();
}

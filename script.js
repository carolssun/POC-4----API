// Função para buscar imagem de gato fofo
function getGatinho(endpoint) {
    fetch(endpoint)
        .then(response => {
            return response.url; // A URL da imagem é retornada diretamente
        })
        .then(urlIMG => {
            let content = document.getElementById("content");
            content.innerHTML = `<img src="${urlIMG}" alt="Gato" style="width: 300px; margin: 10px; height: 400px" />`;
            content.innerHTML += `<p> Um gato fofo </p>`;
        })
        .catch(error => console.log(error))
        .finally(() => console.log("FIM"));
}

// Função assíncrona para buscar imagem de gato dormindo
async function getGatinho2(endpoint) {
    try {
        let response = await fetch(endpoint);
        let urlIMG = response.url; // Usa diretamente a URL da resposta
        let content = document.getElementById('content2');
        content.innerHTML = `<img src="${urlIMG}" alt="Gato" style="width: 300px; margin: 10px; height: 400px" />`;
        content.innerHTML += `<p> Um gato dormindo </p>`;
    } catch (error) {
        console.log(error);
    } finally {
        console.log("fim");
    }
}

// Chama as funções ao carregar a página
getGatinho('https://cataas.com/cat/cute'); // Gato fofo
getGatinho2('https://cataas.com/cat/sleeping'); // Gato dormindo

// Função para recarregar apenas o gato fofo
document.getElementById("reloadGatoFofo").addEventListener("click", () => {
    getGatinho('https://cataas.com/cat/cute');
});

// Função para recarregar apenas o gato dormindo
document.getElementById("reloadGatoDormindo").addEventListener("click", () => {
    getGatinho2('https://cataas.com/cat/sleeping');
});

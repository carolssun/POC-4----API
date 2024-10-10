function getGatinho(endpoint) {
    fetch(endpoint)
        .then(response => {
            return response.url; // A URL da imagem é retornada diretamente
        })
        .then(urlIMG => {
            let content = document.getElementById("content");
            content.innerHTML += `<img src="${urlIMG}" alt="Gato" style="max-width: 300px; margin: 10px;" />`;
        })
        .catch(error => console.log(error))
        .finally(() => console.log("FIM"));
}

// Chama a função ao carregar a página
getGatinho('https://cataas.com/cat'); // Gato aleatório
getGatinho('https://cataas.com/cat/cute'); // Gato fofo
getGatinho('https://cataas.com/cat/sleeping'); // Gato dormindo

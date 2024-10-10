function getGatinho(endpoint) {
    fetch(endpoint)
        .then(response => {
            return response.url; // A URL da imagem é retornada diretamente
        })
        .then(urlIMG => {
            let content = document.getElementById("content");
            content.innerHTML += `<img src="${urlIMG}" alt="Gato" style="width: 300px; margin: 10px; height: 400px" />`;
            content.innerHTML+=`<p> Um gato fofo </p>`;
        })
        .catch(error => console.log(error))
        .finally(() => console.log("FIM"));
}

// Chama a função ao carregar a página
getGatinho('https://cataas.com/cat/cute'); // Gato fofo
getGatinho2('https://cataas.com/cat/sleeping'); // Gato dormindo


async function getGatinho2(endpoint) {
    try {
        let response = await fetch(endpoint);
        let urlIMG = response.url; // Usa diretamente a URL da resposta
        let content = document.getElementById('content2');
        content.innerHTML += `<img src="${urlIMG}" alt="Gato" style="width: 300px; margin: 10px; height: 400px" />`;
        content.innerHTML+=`<p> Um gato dormindo </p>`;
    } catch (error) {
        console.log(error);
    } finally {
        console.log("fim");
    }
}

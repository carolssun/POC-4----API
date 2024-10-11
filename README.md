# <h1 align="center">POC 4- API </h1>

## Sumário
* [Objetivo](#objetivo)
*  [O que é?](#oque)
* [Características do Média Querie](#caracteristicas)
   * [Fetch](#fetch)
   * [Then](#then)
   * [Catch](#catch)
   * [Try](#try)
   * [Await](#await)
   * [Finally](#finally)
*  [Como fazer](#comoFazer) 
* [Autoras](#autoras)

<div id="objetivo">

## Objetivo
  Esta prova de conceito visa criar uma interface simples que consome uma `API` pública para obter e exibir imagens de gatos em uma página web, utilizando requisições assíncronas com `fetch` e manipulando os dados recebidos.

</div> 

<div id ="oque">

## O que é?
As `APIs` (Application Programming Interfaces) permitem a comunicação padronizada entre sistemas, facilitando a troca de informações entre aplicações. Elas são essenciais para a integração eficiente e escalável de serviços no desenvolvimento moderno.

</div>


<div id="caracteristicas">

## Características 
As características `fetch`, `then`, `catch`, `try`, e `finally` são usadas em JavaScript para realizar e lidar com requisições assíncronas a APIs. Você poderá ver exemplos dessas carácterísticas na prática no exemplo de código em [Como fazer](#comoFazer) 

  <div id="fecth">
    
  ### Fetch
  `Fetch` é uma função nativa do JavaScript usada para fazer requisições HTTP. Ela retorna uma promise (promessa), que representa a resposta da requisição.
  
  </div>
  
  <div id="then">
    
  ### Then
  `Then` é usado para lidar com a resolução de uma promise. No caso do fetch, ele é chamado quando a requisição é bem-sucedida, permitindo que você manipule a resposta.
  
  </div>

  <div id="catch">
    
  ### Catch
  `Catch` é usado para capturar e tratar erros que ocorrem durante a execução de uma promise. Ele é acionado quando ocorre algum problema, como a falha de uma requisição.

  </div>

  <div id="try">

  ### Try e Catch (usados com async/await)
`Try` e `catch` são usados com `async/await` para lidar com códigos assíncronos de forma mais linear. `try` é usado para envolver o código que pode gerar uma exceção, enquanto `catch` lida com exceções que podem ocorrer.
  
  </div>

  <div id="await">

  ### Await
`Await` só pode ser usado dentro de funções marcadas com async, ou seja, assíncronas. Este é utilizado antes de uma expressão que retorna uma promise. Ele espera que a promise seja resolvida e retorna o valor da promise resolvida, ou lança um erro se a promise for rejeitada.

  </div>

  <div id="finnaly">

  ### Finally
  `finally` é usado para executar um bloco de código após a resolução ou rejeição de uma promise, independentemente de ter ocorrido um erro ou não. É útil para ações de limpeza, como esconder um carregamento.
  
  </div> 

</div> 

<div id="comoFazer">
  
## Como fazer?
* API Utilizada: Cataas API, que fornece imagens aleatórias de gatos.
* Configuração do Ambiente: Criação de um arquivo HTML simples com uma estrutura básica, incluindo um elemento <div> para exibir as imagens e um script JavaScript para consumir a API. 
  
* Requisição à API: Implementação de duas funções JavaScript para obter imagens de gatos e chamá-las:

* getGatinho: Usando a abordagem tradicional com `fetch` e `then`.
  
* getGatinho2: Usando async/await para realizar a mesma operação de forma assíncrona.

* Tratamento de Resposta: As respostas da API serão analisadas para verificar como a imagem é retornada (se diretamente como URL ou em formato JSON).

* Exibição dos Dados: As URLs das imagens retornadas serão usadas para criar elementos <img> dinamicamente e adicioná-los ao HTML.

* Código HTML:
  
  ``` html
    <head>
        <meta charset="UTF-8">
        <title>API de Gatos</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <h1>Imagens de Gatos</h1>
        <section>
            <div class="card"> 
                <div id="content">    </div>
                <button id="reloadGatoFofo">Trocar Gato Fofo</button>
            </div>
            <div class="card"> 
                <div id="content2">    </div>
                <button id="reloadGatoDormindo">Trocar Gato Dormindo</button>
            </div>
        </section>
    
        <script src="script.js"></script>
    </body>
    </html>
```


* Código JavaScript:


```js
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

function trocarGatoFofo() {
    getGatinho('https://cataas.com/cat/cute'); // Muda a imagem ao clicar
}

function trocarGatoDormindo() {
    getGatinho2('https://cataas.com/cat/sleeping'); // Muda a imagem ao clicar
}
```

Depois de aplicar um pouco de CSS, observe o resultado final: 
![imagem-POC4](https://github.com/user-attachments/assets/f31e83ae-83e2-427c-8faa-911fa8c6b08d)


</div> 

<div id="autoras">

## Autoras
* Carolina Sun Ramos Nantes de Castilho 
* Clara Beatriz Aguiar 
* Erica Gonçalves de Oliveira
* Laura Carolina Balbachan dos Santos

</div>



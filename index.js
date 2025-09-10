document.getElementById('copyright').innerHTML =
    `&copy; ${new Date().getFullYear()} Desenvolvido por Leonardo Filipe.`;


function encurtarUrl(){

    let url = document.querySelector("#input-url").value;

    if (!url.trim()) {
        alert("É necessário a inclusão da URL");
        return;
    }


    let headers = {
        "Content-Type": "application/json",
        "apiKey": "984cb05e098643ceb6719963f9c17c65"
    }

    // dados da requisição
    let linkReq = { destination: url, domain: {fullName: "rebrand.ly"} }

    fetch("https://api.rebrandly.com/v1/links", {method: "post", headers:headers, body:JSON.stringify(linkReq)}
    ).then(response => {
        if (!response.ok) {
            throw new Error('Erro ao encurtar URL');
        }
        return response.json();
    }).then(json =>{
        console.log(json);   
        let inputURL = document.querySelector("#input-url")
        inputURL.value = json.shortUrl;
    }).catch(error => {
        console.error('Erro ao encurtar URL:', error);
    });
}

function atualizarCopyright() {
    document.getElementById('copyright').innerHTML =
    `&copy; ${new Date().getFullYear()} Desenvolvido por Leonardo Filipe.`;
}

function copiar(){
    let inputURL = document.querySelector("#input-url")
    inputURL.select()
    inputURL.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(inputURL.value)

    alert(`Link copiado para a area de transferência: ${inputURL.value}`)
}

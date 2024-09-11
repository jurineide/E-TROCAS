//pegando o elemento com o id  brinquedos - ele é a div com a classe row do grid do BS
const divBrinquedos = document.querySelector('#brinquedos');

// percorrer o array de brinquedos e para cada ocorrência ele irá montar um elemento div com os 
// dados que estão no arry brinquedos
brinquedos.forEach(brinquedo => {
    divBrinquedos.innerHTML += `
    <div class="col-md-3 my-2">
        <div class="card">
            <img src="${brinquedo.imagem}" class="card-img-top" alt="${brinquedo.titulo}">
            <div class="card-body">
                <h5 class="card-title color-blue">${brinquedo.titulo}</h5>
                <h5 class="text-danger">Usuário: ${brinquedo.usuario}</h5>
                <div class="d-grid">
                    <a href="#" class="btn btn-outline-primary">Entrar em contato</a>
                </div>
            </div>
        </div>
    </div>`;
});
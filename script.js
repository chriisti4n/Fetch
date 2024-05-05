document.addEventListener('DOMContentLoaded', function () {
    const listaAnimais = document.getElementById('listaAnimais');
    const formulario = document.getElementById('formulario');

    function exibirAnimais() {
        fetch('https://66362c3f415f4e1a5e2685cd.mockapi.io/fetch/v1/Animal')
            .then(response => response.json())
            .then(data => {
                listaAnimais.innerHTML = '';

                data.forEach(animal => {
                    const itemLista = document.createElement('li');
                    itemLista.textContent = `${animal.id} - ${animal.nome} (${animal.idade}) - ${animal.raca}`;
                    listaAnimais.appendChild(itemLista);
                });
            })
            .catch(error => {
                console.error('Erro ao buscar os dados da API:', error);
            });
    }

    function cadastrarAnimal(event) {
        event.preventDefault();

        const novoAnimal = {
            nome: document.getElementById('nome').value,
            idade: document.getElementById('idade').value,
            raca: document.getElementById('raca').value
        };

        fetch('https://66362c3f415f4e1a5e2685cd.mockapi.io/fetch/v1/Animal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoAnimal)
        })
            .then(response => {
                if (response.ok) {
                    console.log('Animal cadastrado com sucesso!');
                    exibirAnimais();
                    formulario.reset();
                } else {
                    console.error('Erro ao cadastrar o animal:', response.statusText);
                }
            })
            .catch(error => {
                console.error('Erro ao cadastrar o animal:', error);
            });
    }

    formulario.addEventListener('submit', cadastrarAnimal);

    exibirAnimais();
});
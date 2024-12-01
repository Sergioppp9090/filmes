import movies from './movies.js';

document.getElementById('filmForm').addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtém a idade e as categorias selecionadas
    const idadeUsuario = parseInt(document.getElementById('age').value);
    const categoriasSelecionadas = Array.from(
        document.querySelectorAll('input[name="category"]:checked')
    ).map(category => category.value);

    // Filtra os filmes com base na idade e categorias
    const filmesFiltrados = movies.filter(filme => {
        if (idadeUsuario >= 1 && idadeUsuario <= 9) {
            return filme.ageRating <= 9 && categoriasSelecionadas.includes(filme.genre);
        } else {
            return categoriasSelecionadas.includes(filme.genre) && filme.ageRating <= idadeUsuario;
        }
    });

    // Limpa os resultados anteriores
    const resultadosFilmes = document.getElementById('movieResults');
    resultadosFilmes.innerHTML = '';

    // Exibe os filmes
    if (filmesFiltrados.length > 0) {
        filmesFiltrados.forEach(filme => {
            const divFilme = document.createElement('div');
            divFilme.classList.add('movie');

            divFilme.innerHTML = `
                <h3>${filme.title}</h3>
                <p><strong>Gênero:</strong> ${filme.genre}</p>
                <p><strong>Sinopse:</strong> ${filme.synopsis}</p>
                <iframe width="560" height="315" src="${filme.trailer}"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;

            resultadosFilmes.appendChild(divFilme);
        });
    } else {
        resultadosFilmes.innerHTML = '<p>Nenhum filme encontrado para as categorias selecionadas.</p>';
    }
});

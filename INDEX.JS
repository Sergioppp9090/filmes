import movies from './movies.js';
document.getElementById('filmForm').addEventListener('submit', (event) => {
 event.preventDefault();Evita o envio do formulário
 // Obtém a idade e as categorias selecionadas
    let age= parseInt(document.getElementById('age').value);//Conerte a idade para o número
    let categories document.querySelectorAll('input[name="category"]:checked')
    let selectedCategories=[];
    for(let =0;i< categories.lenght;i++) {
       selectedCategories.push(categories[i].value);
     }
    // Filtra os filmes com base na idade e categorias
     let fileredMovies;
     if (age>= 1 && age <= 9) {
        // Filtra  filmes  adequados para idade de 0 a 9
         filteredMovies =móveis.gilter

const filmes = require('./database');
//console.log(filmes);

const ReadLine = require('readline-sync');
const Opcion = ReadLine.question('Deseja buscar um filme? S/N => ');

if (Opcion.toLocaleUpperCase() === 'S') {
  console.log('As categorias disponíveis são: ');
  console.log('Literario / Ficcao / Drama / Acao / Terror');

  const OpcionCateg = ReadLine.question('Qual categoria deseja? ');
  const Retorno = filmes.filter(film => film.categoria === OpcionCateg);
  console.table(Retorno);
} else {
  console.log('Estes são todos os filmes disponíveis');
  console.table(filmes);
}
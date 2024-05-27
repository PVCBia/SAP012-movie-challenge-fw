//verifica se a função formatMovie obtém dados de filmes de uma API, converte IDs de gênero, constrói uma URL de imagem completa, extrai o ano de lançamento e retorna um objeto formatado com a estrutura e o conteúdo esperados.


import { formatMovie } from './transformers';

describe('formatMovie', () => {

  fit('deve retornar um objeto com os dados formatados', () => {
    const apiMovieData = { //representa os dados brutos do filme recebidos de uma API
      id: 823464,
      title: 'Godzilla x Kong: The New Empire',
      poster_path: '/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg',
      release_date: '2024-03-27',
      genre_ids: [878,
        28,
        12],
      overview: 'Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.',
      vote_average: 7.0
    };

    const genresMap = new Map([ //Map é usado para traduzir IDs de gênero (números) em nomes de gênero legíveis (strings)
      [28, 'Action'],
      [12, 'Adventure'],
      [878, 'Science Fiction']
    ]);

    const formattedMovie = formatMovie(apiMovieData, genresMap);
    //chama a função formatMovie, passando apiMovieData e genresMap como argumentos. A função processa os dados e retorna um novo objeto
    expect(formattedMovie).toEqual({ 
      id: 823464,
      title: 'Godzilla x Kong: The New Empire',
      image_path: 'https://image.tmdb.org/t/p/w500/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg', //é convertido em um URL de imagem completo usando uma URL base pré-definida 
      release_year: '2024',
      genres: ['Science Fiction','Action', 'Adventure'],
      overview: 'Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.',
      vote_average: 7.0
    });
  })
});

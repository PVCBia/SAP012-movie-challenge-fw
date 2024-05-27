import { Movie } from "src/models/Movie";

// apiMovieData: dados brutos do filme recebidos de uma API
// genresMap: mapeia IDs de gênero (números) para traduzir aos seus nomes de gênero correspondentes (strings)

export function formatMovie(apiMovieData: any, genresMap: Map<number, string>): Movie {
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  //armazena a URL base para os caminhos de imagem de filmes da TMDB.

  const genres: string[] = apiMovieData.genre_ids
  ? apiMovieData.genre_ids.map((genreId: number) => genresMap.get(genreId) || 'Gênero não encontrado!')
  : ['Gênero não disponível'];
  // verifica se o objeto apiMovieData possui uma propriedade "genre_ids",
  // se existir (apiMovieData.genre_ids é verdadeiro), ela usa a função map para iterar sobre cada genreId na matriz.
  // se o ID do gênero não for encontrado no mapa, ele usa um valor padrão de "Gênero não encontrado!".

  // define o objeto de filme formatado que será retornado pela função.
  return {
    id: apiMovieData.id,
    image_path: apiMovieData.poster_path ? `${baseUrl}${apiMovieData.poster_path}` : 'https://image.tmdb.org/t/p/w500/wkfG7DaExmcVsGLR4kLouMwxeT5.jpg',
    // se existir, ele constrói a URL completa da imagem concatenando baseUrl com o caminho fornecido. Caso contrário, ele usa uma URL de imagem padrão (provavelmente um marcador de posição).
    title: apiMovieData.title,
    release_year: apiMovieData.release_date ? new Date(apiMovieData.release_date).getFullYear().toString() : 'Desconhecido',
    // existir, ele analisa a string da data em um objeto JavaScript Date, extrai o ano usando getFullYear() e o converte em uma string. Caso contrário, ele usa o valor "Desconhecido".
    genres,
    vote_average: apiMovieData.vote_average,
    overview: apiMovieData.overview,
  };
}

//na ordem:
// id: number;
// image_path: string;
// title: string;
// release_year: string;
// genres: string[];
// vote_average: number;
// overview: string;

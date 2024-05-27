//Definir um tipo TypeScript chamado Movie dentro do arquivo `Movie.d.ts`.
//Incluir propriedades como título, pôster, ano de lançamento e qualquer outra 
//informação relevante necessária para a interface do usuário e a lógica de negócios.

export interface Movie {
  id: number;
  image_path: string;
  title: string;
  release_year: string;
  genres: string[];
  vote_average: number;
  overview: string;
}
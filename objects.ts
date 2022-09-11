type Movie = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWordwide: number;
  };
};

const cats: Movie = {
  title: 'Random cat movie',
  director: 'Pedro',
  releaseYear: 2010,
  boxOffice: {
    budget: 100000,
    grossUS: 1000000,
    grossWordwide: 400000,
  },
};
const dogs: Movie = {
  title: 'Random dog movie',
  originalTitle: 'The dog',
  director: 'Pedro',
  releaseYear: 2010,
  boxOffice: {
    budget: 100000,
    grossUS: 1000000,
    grossWordwide: 400000,
  },
};

function getProfit(movie: Movie): number {
  const { budget, grossWordwide } = movie.boxOffice;
  return grossWordwide - budget;
}

console.log(getProfit(dogs));
console.log(getProfit(cats));

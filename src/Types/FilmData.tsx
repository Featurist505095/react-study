export type FilmDataType = {
    id: number;
    title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    poster_path: string;
    overview: string;
    budget: number;
    revenue: number;
    genres: string[];
    runtime: number;
}

// "id": 489,
// "title": "Good Will Hunting",
// "tagline": "Some people can never believe in themselves, until someone believes in them.",
// "vote_average": 7.9,
// "vote_count": 3770,
// "release_date": "1997-12-05",
// "poster_path": "https://image.tmdb.org/t/p/w500/jq8LjngZ7XZEQge5JFTdOGMrHyZ.jpg",
// "overview": "Will Hunting has a genius-level IQ but chooses to work as a janitor at MIT. When he solves a difficult graduate-level math problem, his talents are discovered by Professor Gerald Lambeau, who decides to help the misguided youth reach his potential. When Will is arrested for attacking a police officer, Professor Lambeau makes a deal to get leniency for him if he will get treatment from therapist Sean Maguire.",
// "budget": 10000000,
// "revenue": 225933435,
// "genres": [
//   "Drama"
// ],
// "runtime": 126
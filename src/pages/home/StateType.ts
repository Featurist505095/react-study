export type StateType = {
    options: [OrderType | SearchType];
    currentMovie: number;
}

export type OrderType = 'release date' | 'rating';


export type SearchType = 'TITLE' | 'GENRE';

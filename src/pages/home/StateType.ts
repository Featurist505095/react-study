export type StateType = {
    options: [SortType | SearchType];
    currentMovie: number;
}

export type SortType = 'release date' | 'rating';


export type SearchType = 'TITLE' | 'GENRE';

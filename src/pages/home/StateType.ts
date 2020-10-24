export type StateType = Order & Search & {
    options: OptionsType[];
    currentMovie: number;
}

export type Order = {
    order: 'release date' | 'rating';
}

export type Search = {
    searchBy: 'TITLE' | 'GENRE';
}

export type OptionsType = {
    id: number;
    name: string;
}
export type StateType = Order & {
    options: OptionsType[];
    currentMovie: number;
  }

export type Order = {
    order: 'release date' | 'rating';
}

export type OptionsType = {
    id: number;
    name: string;
}
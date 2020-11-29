import React from 'react';
import { shallow } from '../../enzyme';
import HeaderView from './HeaderView';

describe('Test Header:', () => {
    const DATA = {
        id: 47964,
        title: 'A Good Day to Die Hard',
        tagline: 'Yippee Ki-Yay Mother Russia',
        vote_average: 5.2,
        vote_count: 3809,
        release_date: '2013-02-06',
        poster_path: 'https://image.tmdb.org/t/p/w500/c2SQMd00CCGTiDxGXVqA2J9lmzF.jpg',
        overview: 'Iconoclastic, take-no-prisoners cop John McClane, finds himself for the first time on foreign soil after traveling to Moscow to help his wayward son Jack - unaware that Jack is really a highly-trained CIA operative out to stop a nuclear weapons heist. With the Russian underworld in pursuit, and battling a countdown to war, the two McClanes discover that their opposing methods make them unstoppable heroes.',
        budget: 92000000,
        revenue: 304654182,
        genres: [
            'Action',
            'Thriller'
        ],
        runtime: 98
    };

    it('Test contentless', () => {
        const content = shallow(<HeaderView />);

        expect(content.exists('MovieCard')).toBe(false);
    });
    it('Test with content', () => {
        const content = shallow(<HeaderView MovieData={DATA} />);

        expect(content.exists('MovieCard')).toBe(true);
    });
});
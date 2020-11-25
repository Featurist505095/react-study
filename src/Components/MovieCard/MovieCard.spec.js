import React from 'react';
import { shallow } from '../../enzyme';
import { MovieCard } from './MovieCard';

describe('Test MovieCard:', () => {
    it('Test content', () => {
        const content = shallow(<MovieCard
          poster_path="url_to_image"
          title="A Good Day to Die Hard"
          release_date="2013-02-06"
          genres={['Action', 'Thriller']}
          vote_average={5.2}
          overview="Iconoclastic, take-no-prisoners cop John McClane, finds himself for the first time on foreign soil after traveling to Moscow to help his wayward son Jack - unaware that Jack is really a highly-trained CIA operative out to stop a nuclear weapons heist. With the Russian underworld in pursuit, and battling a countdown to war, the two McClanes discover that their opposing methods make them unstoppable heroes."
          runtime={98}
        />);

        expect(content.exists('MovieImage')).toBe(true);
        expect(content.exists('MovieCardInformation')).toBe(true);
    });
});

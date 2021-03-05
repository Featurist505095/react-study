import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';

it('Test footer render', () => {
    const tree = renderer
        .create(<Footer />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
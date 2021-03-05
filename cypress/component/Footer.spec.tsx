import React from 'react'
import { mount } from 'cypress-react-unit-test'
import Footer from '../../src/Components/Footer';

describe('Footer component', () => {
  it('works', () => {
    mount(<Footer />)
    // now use standard Cypress commands
    cy.contains('netflixroulette').should('be.visible')
  })
})
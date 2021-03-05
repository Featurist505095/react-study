describe('Visit another movie page', () => {
  it('works', () => {
    cy.visit('http://localhost:3000/');

    cy.get('a[href="/movie"]').click();
    cy.url().should('include', 'movie');
    cy.pause();
  })
})
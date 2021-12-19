import { beforeEach, cy, describe, it } from 'local-cypress';

describe('Index Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display correct heading', () => {
    cy.get('h1').should(
      'contain',
      'Next.js + Tailwind CSS + TypeScript Starter'
    );
  });
});

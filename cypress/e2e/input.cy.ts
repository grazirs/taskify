describe('input', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  describe('when add a task', () => {
    it('submits', () => {
      cy.get('.input__box')
        .type('Study Typescript')
        .type('{enter}')
    })
  })
})

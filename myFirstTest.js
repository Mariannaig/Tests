/// <reference types="cypress"/>

it('google/facebook login test', function() {

    cy.visit('https://www.google.com/')

    // set 5sec timeout, because of the dynamic Google cookies page
    cy.get('#L2AGLb > .QS5gu', {timeout:1000})
        .click()    

    // search for and enter Facebook
    cy.get('.gLFyf').type('Facebook{enter}')   
    cy.get('.dmenKe > :nth-child(1) > .usJj9c > h3 > .l')
        .click()

    // accept cookies/ dynamic Facebook page
    cy.get('#accept-cookie-banner-label', {timeout: 1000})
        .click()

    // type userName & password
    cy.get('#m_login_email')
        .type('testsoapapi@abv.bg')
        .should('have.value', 'testsoapapi@abv.bg');
        
    cy.get('#m_login_password')
        .type('Qwerty-12345')
        .should('have.value', 'Qwerty-12345')

    cy.get('#login_password_step_element > ._54k8')
        .click()

    cy.get('#accept-cookie-banner-label', {timeout: 1000})
        .click()

  
})


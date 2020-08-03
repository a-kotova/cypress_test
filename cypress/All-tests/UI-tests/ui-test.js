import Chance from 'Chance'
import SearchResultsPage from "../../page-objects/searchResultsPage"
import AccessoriesPage from "../../page-objects/accessoriesPage"

/*describe ('Tests for Google Shop', () => {
    it('Find item', () =>
            {
                cy.visit('https://store.google.com/us/collection/accessories_wall?hl=en-US')
                cy.get('.header-search-icon').click()
                cy.get('input[aria-label="Search Google Store"]').type(`Google Pixel Buds{enter}`)
                cy.get('a[href="/product/pixel_buds"]').should('exist')
            })
    })
*/

describe ('Tests for Google Shop', () => {
    before(() => {
        cy.fixture('product').then(data => {
            cy.wrap(data).as('productData')
        })
    })
    it('Find item', () =>
    {
        cy.get('@productData').then((productData) => {

            cy.log("Given user is at Accessories Page")
            AccessoriesPage.open()

            cy.log("When user performs search by product name")
            AccessoriesPage.performSearch(productData.name)
            SearchResultsPage.getProductByDocId(productData.url)
                .should('exist')
        })
    })
})
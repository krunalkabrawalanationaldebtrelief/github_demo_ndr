const csv = require('neat-csv')

let regData
const fail = 'FAIL'

describe('Registration Form', () => {
    beforeEach(() => {
        cy.fixture("users.csv")
            .then(csv)
            .then((data) => {
                regData = data
            })
    })

    context('Phone number input box', () => {
        it.only(' Print phone number222222 ', () => {
            cy.visit('https://ww8.nationaldebtrelief.com/apply/')
            cy.get('#input_266_37').select(2)
            cy.get('#gform_next_button_266_2').click({ force: true })
            cy.wait(5000)

            for (let i = 0; i < regData.length; i++) {
                cy.get('#input_266_62_raw').clear().type(regData[i]['Telephone'])
                cy.log(regData[i]['Telephone'])
                cy.get('.gform_button.button').first().click({ force: true })
                cy.wait(3000)

                cy.get('#input_266_62_raw').invoke('attr', 'aria-invalid').then((staatus) => {
                    cy.log('After type the numer staus should be  ==>  ' +staatus)
                    if (staatus == 'true') {
                        cy.log(fail)
                        cy.log('Number is invalid Failed')

                    } else {
                        cy.log('Number is valid Pass')
                       
                    }
                })
                 
            }
         
        })
    })
})


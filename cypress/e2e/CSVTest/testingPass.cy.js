const csv = require('neat-csv')
let regData

describe('Registration Form', () => {
    beforeEach(() => {
        cy.fixture("users.csv")
            .then(csv)
            .then((data) => {
                regData = data
               // regData.unshift({ PhoneNumber: 'Telephone', pass_fail: 'pass /fail' })
            })
    })

    context('Phone number input box', () => {
        it.only(' Print phone number222222 ', () => {
            cy.visit('https://ww8.nationaldebtrelief.com/apply/')
            cy.get('#input_266_37').select(2)
            cy.get('#gform_next_button_266_2').click({ force: true })
    cy.wait(3000)
            
            for (let i = 0; i < regData.length; i++) {
               
                cy.get('#input_266_62_raw').clear().type(regData[i]['Telephone'])
                cy.log(regData[i]['Telephone'])
                let TelNo = regData[i]['Telephone']
                cy.get('.gform_button.button').first().click({ force: true })
                cy.wait(2000)
               
                cy.get('#input_266_62_raw').invoke('attr', 'aria-invalid').then((staatus) => {
                    cy.log('After type the numer staus should be  ==>  ' +staatus)
                    if (staatus == 'true') {
                       regData.push({ PhoneNumber: TelNo, pass_fail: 'Faild' })
                       Cypress.env('TelNo', TelNo)
                       cy.log('Faled Number => ' +Cypress.env('TelNo'))
                        cy.log('Number is invalid Failed')

                    } else {
                    regData.push({ PhoneNumber: TelNo, pass_fail: 'Pass' })
                       Cypress.env('TelNo', TelNo)
                       cy.log('Pass Number => ' +Cypress.env('TelNo'))
                        cy.log('Number is valid Pass')
                       
                    }
                })
                 
            }
            regData.unshift({ PhoneNumber: 'Telephone', pass_fail: 'pass /fail' })
            cy.task("writeTOCsv",{
                name: 'temp',
                rows: regData
            })
         
        })
    })
})


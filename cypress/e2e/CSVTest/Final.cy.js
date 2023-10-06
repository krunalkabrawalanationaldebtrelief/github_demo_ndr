const csv = require('neat-csv')

let regData
const fail = 'FAIL'

describe('Registration Form', () => {
    // beforeEach(() => {
    //     cy.fixture("users.csv")
    //         .then(csv)
    //         .then((data) => {
    //             regData = data
    //         })
    // })
    it.only(' Print phone number222222 ', () => {
        cy.visit('https://ww8.nationaldebtrelief.com/apply/')
        cy.get('#input_266_37').select(2)
        cy.get('#gform_next_button_266_2').click({ force: true })
        cy.wait(5000)

        cy.task('readFromCsv').then(res => {
            cy.log(res);
            cy.log(res[0]['PhoneNumber'])
            cy.log(res.length)
            

            
            for (let i = 0; i <= res.length; i++) {
                let phonNo = res[i]['PhoneNumber']
            cy.log(phonNo)
                cy.log(phonNo)
                //cy.log(res[i]['PhoneNumber'])
                // cy.get('#input_266_62_raw').clear().type(res[i]['PhoneNumber'])
                // cy.get('.gform_button.button').first().click({ force: true })
                // cy.wait(3000)

                // cy.get('#input_266_62_raw').invoke('attr', 'aria-invalid').then((staatus) => {
                //     cy.log('After type the numer staus should be  ==>  ' + staatus)
                //     if (staatus == 'true') {
                //         res.unshift({ PhoneNumber: 'PhoneNumber', pass_fail: 'pass /fail' })
                //         res.push({ PhoneNumber: res[i]['PhoneNumber'], pass_fail: 'Faild' })
                //         cy.log('Number is invalid Failed')

                //     } else {
                //         res.unshift({ PhoneNumber: 'PhoneNumber', pass_fail: 'pass /fail' })
                //         res.push({ PhoneNumber: res[i]['PhoneNumber'], pass_fail: 'Pass' })
                //         cy.log('Number is valid Pass')
                //     }
                // })
            }

            cy.task("writeTOCsv", {
                name: 'temp',
                rows: res
            })
        })


        // for (let i = 0; i < regData.length; i++) {
        //     cy.get('#input_266_62_raw').clear().type(regData[i]['Telephone'])
        //     cy.log(regData[i]['Telephone'])
        //     cy.get('.gform_button.button').first().click({ force: true })
        //     cy.wait(3000)

        //     cy.get('#input_266_62_raw').invoke('attr', 'aria-invalid').then((staatus) => {
        //         cy.log('After type the numer staus should be  ==>  ' + staatus)
        //         if (staatus == 'true') {
        //             cy.log(fail)
        //             cy.log('Number is invalid Failed')

        //         } else {
        //             cy.log('Number is valid Pass')

        //         }
        //     })

        // }

    })
})


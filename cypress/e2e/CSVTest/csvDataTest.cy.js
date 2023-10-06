context('Xlsx file', () => {
    it('Read excel file', () => {
        cy.task('readXlsx', { file: 'my-excel.xlsx', sheet: "Sheet1" }).then((rows) => {
            const a = rows.text();
            cy.log(rows)
            //expect(rows.Length).to.equal(3)
            cy.log(rows[0])
            //expect(rows[0][0]).to.equal('hello')
            cy.parseXlsx('my-excel.xlsx').then((rows) => {
                const rowLength = Cypress.$(rows[0]).Length
                cy.log(rowLength)
                for (let index = 0; index < rowLength; index++) {
                    var rows = rows[index].data
                    cy.log(rows)
                    // cy.writeFile("cypress/fixtures/excelData.json", rows)
                    // cy.readFile("cypress/fixtures/userDetails.json")
                    // cy.writetFile("cypress/fixtures/data.json", { name: 'ABCD', email: 'abcd@gmail.com' })
                }
            })
        })
    })
})
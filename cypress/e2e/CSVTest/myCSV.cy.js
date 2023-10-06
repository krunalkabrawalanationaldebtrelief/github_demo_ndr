it('read and write from csv file', () => {
    cy.task('readFromCsv').then(res => {
        cy.log(res);
        console.log(res)

        res.unshift({PhoneNumber:'PhoneNumber', pass_fail:'pass /fail'})
        res.push({PhoneNumber:25874569854,pass_fail: 'pass/fail'})
        // res.push({pass_fail:'pass'})

        for(let i = 0 ; i <= res.length; i++){
            cy.log(res[i])
        }

        cy.task("writeTOCsv",{
            name: 'temp',
            rows: res
        })
    })
})
const fs = require('fs');
const csv = require('csv-parser')
const inputeFilePath = 'cypress/fixtures/users.csv';
const outputFilePath = 'temp.csv';
const newData = {column1: 'value1', column2: 'value2'};

const rows =[]

describe('CSV ', ()=>{
    it('Read and write CSV fiel',()=>{
        fs.creatReadStream(inputeFilePath)
        .pipe(csv())
        .on('data',(row)=>{
            rows.push(row);
        })
        .on('end',()=>{
            rows.unshift(newData);
            const ws =fs.creatWriteStream(outputFilePath);

            if(rows.length> 0){
                const headrRow =Object.keys(rows[0]).join(',');
                ws.write(`${headrRow}\n`);
            }

            rows.forEach((row)=>{
                const rowData = Object.values(row).join(',');
                ws.write(`${rowData}\n`)
            });

            ws.end();
            cy.log('CSV file updated')
        })

    })
})

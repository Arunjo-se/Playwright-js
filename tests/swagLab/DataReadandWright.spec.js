const { test } = require('@playwright/test');
const { readExcelData } = require('../../utils/ExcelRead');
const { writeExcelData } = require('../../utils/ExcelWright');
const path = require('path');

test('Print one cell from Excel', async () => {
    const data = await readExcelData(path.resolve(__dirname, '../../data/excelTest.xlsx'), 'Sheet1');

    for (let i = 0; i < data.length; i++) {
   
      console.log(data[i]['UserNmae']); // prints 'xyz'
      console.log(data[i]['password']); // prints '12345'
    }

});

test('Write test data to Excel', async () => {

  const abc = "Writing to Excel";
    const filePath = path.resolve(__dirname, '../../data/testWrite.xlsx');
    const sheetName = 'Sheet1';
    const headers = ['UserNmae', 'password'];
    
    const rows = [
      [abc, 'pass123'],
      ['testuser2', 'pass456'],
      ['testuser3', 'pass789']
    ];
    await writeExcelData(filePath, sheetName, headers, rows);
    console.log('Test data written to Excel:', filePath);
});



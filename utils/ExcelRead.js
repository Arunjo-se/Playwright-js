const ExcelJS = require('exceljs');

class ExeclRead {
  constructor(filePath, sheetName) {
    this.filePath = filePath;
    this.sheetName = sheetName;
    this.workbook = new ExcelJS.Workbook();
  }

  async readData() {
    try {
      await this.workbook.xlsx.readFile(this.filePath);
      const worksheet = this.workbook.getWorksheet(this.sheetName);
      if (!worksheet) {
        throw new Error(`--- first error : Sheet '${this.sheetName}' not found in file '${this.filePath}'`);
      }
      const data = [];
      let headers = [];
      worksheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) {
          headers = row.values.slice(1); // skip first empty value
          return;
        }
        const rowData = {};
        row.eachCell((cell, colNumber) => {
          rowData[headers[colNumber - 1]] = cell.value;
        });
        data.push(rowData);
      });
      return data;
    } catch (error) {
      console.error('----- 1. Error reading Excel file:', error.message);
      return [];
    }
  }
}

// Reusable function to read data from any Excel file and sheet.
async function readExcelData(filePath, sheetName) {
  try {
    const excelSheet = new ExeclRead(filePath, sheetName);
    return await excelSheet.readData();
  } catch (error) {
    console.error('Error in readExcelData:', error.message);
    return [];
  }
}

module.exports = { ExeclRead, readExcelData };
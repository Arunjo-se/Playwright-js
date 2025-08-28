import ExcelJS from 'exceljs';

class ExcelWrite {
  constructor(filePath, sheetName) {
    this.filePath = filePath;
    this.sheetName = sheetName;
    this.workbook = new ExcelJS.Workbook();
    this.worksheet = null;
  }

  async initSheet(headers = []) {
    try {
      // Try to read existing file
      await this.workbook.xlsx.readFile(this.filePath);
      this.worksheet = this.workbook.getWorksheet(this.sheetName);
      if (!this.worksheet) {
        this.worksheet = this.workbook.addWorksheet(this.sheetName);
        if (headers.length) this.worksheet.addRow(headers);
      }
    } catch (err) {
      // If file doesn't exist, create new workbook and worksheet
      this.workbook = new ExcelJS.Workbook();
      this.worksheet = this.workbook.addWorksheet(this.sheetName);
      if (headers.length) this.worksheet.addRow(headers);
    }
  }

  async writeRow(rowData) {
    if (!this.worksheet) throw new Error('Worksheet not initialized. Call initSheet() first.');
    this.worksheet.addRow(rowData);
    await this.workbook.xlsx.writeFile(this.filePath);
  }
}

// Reusable function to write data to any Excel file and sheet
async function writeExcelData(filePath, sheetName, headers, rows) {
  const excelWriter = new ExcelWrite(filePath, sheetName);
  await excelWriter.initSheet(headers);
  for (const row of rows) {
    await excelWriter.writeRow(row);
  }
}

module.exports = { ExcelWrite, writeExcelData };

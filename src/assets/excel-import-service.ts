import { Injectable } from '@angular/core';
import * as Excel from 'exceljs/dist/exceljs.min';
import * as papa from 'papaparse';

@Injectable({
  providedIn: 'root'
})
export class ExcelImportService {

  constructor() { }

  public async importFromExcel(file: File): Promise<any[]> {
    const extension = file.name.split('.').pop();
    switch (extension) {
      case 'xlsx':
        return this.importFromXlsx(file);
      case 'csv':
        return this.importFromCsv(file);
      case 'xls':
        return this.importFromXls(file);
      default:
        throw new Error(`Unsupported file type: ${extension}`);
    }
  }

  private async importFromXlsx(file: File): Promise<any[]> {
    const workbook = new Excel.Workbook();
    await workbook.xlsx.load(file);
    const worksheet = workbook.getWorksheet(1);
    const data = [];
    worksheet.eachRow(function(row, rowNumber) {
      const rowData = [];
      row.eachCell(function(cell, colNumber) {
        rowData.push(cell.value);
      });
      data.push(rowData);
    });
    return data;
  }

  private async importFromCsv(file: File): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function() {
        const csvData = reader.result as string;
        const parsedData = papa.parse(csvData, {
          header: true
        });
        resolve(parsedData.data);
      };
      reader.readAsText(file);
    });
  }

  private async importFromXls(file: File): Promise<any[]> {
    // Not implemented
    throw new Error('Import from .xls is not supported');
  }

}

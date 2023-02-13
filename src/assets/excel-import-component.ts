import { Component } from '@angular/core';
import { ExcelImportService } from './excel-import.service';

@Component({
  selector: 'app-excel-import',
  template: `
    <div>
      <input type="file" (change)="importExcel($event.target.files)">
    </div>
  `
})
export class ExcelImportComponent {

  constructor(private excelImportService: ExcelImportService) { }

  public importExcel(files: FileList) {
    if (files.length === 0) {
      return;
    }
    const file = files.item(0);
    this.excelImportService.importFromExcel(file)
      .then(data => {
        console.log(data);
        // do something with the data
      })
      .catch(error => {
        console.error(error);
      });
  }

}

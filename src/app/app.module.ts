import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';

import {APP_ROUTES} from './routes';
import { AppComponent } from './app.component';
import { HelloNG2Component } from './hello-ng2/hello-ng2.component';
import { TemplateSyntaxPropertiesComponent } from './template-syntax-properties/template-syntax-properties.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorPreviewerComponent } from './color-previewer/color-previewer.component';
import { InputOutputComponentComponent } from './input-output-component/input-output-component.component';
import { CoreDirectivesComponent } from './core-directives/core-directives.component';
import { PipesExComponent } from './pipes-ex/pipes-ex.component';
import { SortPipe } from './sort.pipe';
import { HttpComComponent } from './http-com/http-com.component';
import { HttpExWithServiceComponent } from './http-ex-with-service/http-ex-with-service.component';
import { HttpServiceService} from './http-service.service';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloNG2Component,
    TemplateSyntaxPropertiesComponent,
    ColorPickerComponent,
    ColorPreviewerComponent,
    InputOutputComponentComponent,
    CoreDirectivesComponent,
    PipesExComponent,
    SortPipe,
    HttpComComponent,
    HttpExWithServiceComponent,
    ReactiveFormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

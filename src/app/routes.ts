import {Routes} from '@angular/router';
import { HelloNG2Component } from './hello-ng2/hello-ng2.component';

import { TemplateSyntaxPropertiesComponent } from './template-syntax-properties/template-syntax-properties.component';
import { InputOutputComponentComponent } from './input-output-component/input-output-component.component';
import { CoreDirectivesComponent } from './core-directives/core-directives.component';
import { PipesExComponent } from './pipes-ex/pipes-ex.component';
import { HttpComComponent } from './http-com/http-com.component';
import { HttpExWithServiceComponent } from './http-ex-with-service/http-ex-with-service.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


export const APP_ROUTES: Routes = [
  {path: '', component: HelloNG2Component},
  {path: 'example2', component: TemplateSyntaxPropertiesComponent},
  {path: 'example3', component: InputOutputComponentComponent},
  {path: 'example4', component: CoreDirectivesComponent},
  {path: 'example5', component: PipesExComponent},
  {path: 'example6', component: HttpComComponent},
  {path: 'example7', component: HttpExWithServiceComponent},
  {path: 'example8', component: ReactiveFormComponent},

  {path: '**', component: HelloNG2Component},
];

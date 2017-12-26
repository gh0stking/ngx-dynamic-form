import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
  DynamicFormComponent,
  DynamicFormControlComponent,
  DynamicFormService,
} from '../components';

import { QuestionService } from '../services';

const COMPONENTS = [
  DynamicFormComponent,
  DynamicFormControlComponent,
];

const SERVICES = [
  DynamicFormService,
  QuestionService,
];

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [
    ...SERVICES,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

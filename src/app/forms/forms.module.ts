import { EmailComponent } from './profile/email/email.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormRoutes } from './forms.routing';
import { QuillModule } from 'ngx-quill';

import { MatDatepickerModule } from '@angular/material/datepicker';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { FormfieldComponent } from './formfield/formfield.component';
import { InputfieldComponent } from './input/input.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormLayoutComponent } from './form-layouts/form-layout.component';
import { PaginatiorComponent } from './paginator/paginator.component';
import { SortheaderComponent } from './sortheader/sortheader.component';
import { SelectfieldComponent } from './select/select.component';
import { EditorComponent } from './editor/editor.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { UploadComponent } from './file-upload/upload.component';
import { WizardComponent } from './wizard/wizard.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import {  DialogPhoneComponent, ProfileComponent } from './profile/profile.component';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PhoneComponent } from './profile/phone/phone.component';
import { SecurityComponent } from './profile/security/security.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
};


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FormRoutes),
    DemoMaterialModule,
    QuillModule.forRoot(),
    MatDatepickerModule,
    PerfectScrollbarModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    }
  ],
  declarations: [
    AutocompleteComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    FormfieldComponent,
    DatepickerComponent,
    FormLayoutComponent,
    InputfieldComponent,
    DialogPhoneComponent,
    EmailComponent,
    SecurityComponent,
    PhoneComponent,
    SortheaderComponent,
    SelectfieldComponent,
    EditorComponent,
    ProfileComponent,
    PaginatiorComponent,
    FormValidationComponent,
    UploadComponent,
    WizardComponent,
    MultiselectComponent,
  ],
})
export class FormModule {}

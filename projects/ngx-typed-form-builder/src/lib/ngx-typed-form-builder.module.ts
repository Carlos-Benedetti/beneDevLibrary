import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxTypedFormBuilderService } from './ngx-typed-form-builder.service';



@NgModule({
  imports:[
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    NgxTypedFormBuilderService
  ],
})
export class NgxTypedFormBuilderModule { }

import { NgModule } from '@angular/core';
import { NgxLongPressDirective } from './ngx-long-press.directive';
import { IonicModule } from '@ionic/angular'


@NgModule({
  declarations: [
    NgxLongPressDirective
  ],
  imports: [
    IonicModule
  ],
  exports: [
    NgxLongPressDirective
  ]
})
export class NgxLongPressModule { }

import { Component, ContentChild, ElementRef, Input } from '@angular/core';
import { IonInput } from '@ionic/angular';


@Component({
  selector: 'ngx-show-hide-passwd',
  templateUrl: './ngx-show-hide-passwd.component.html',
  styleUrls: ['./ngx-show-hide-passwd.component.scss']
})
export class NgxShowHidePasswdComponent {
  @ContentChild(IonInput) private ionInput?: IonInput;

  private _showPassword = false;
  public get showPassword() {
    return this._showPassword;
  }

  @Input() public set showPassword(value) {
    this._showPassword = value;
    this.updateView();
  }

  public get input(): IonInput | HTMLInputElement {
    return this.ionInput || this.ref.nativeElement.querySelector('input');
  }

  constructor(private ref: ElementRef) { }

  toggleShow() {
    this.showPassword = !this.showPassword;
    this.updateView();
  }

  private updateView() {
    this.input.type = this.showPassword ? 'text' : 'password';
  }

}

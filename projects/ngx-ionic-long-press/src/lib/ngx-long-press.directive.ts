import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { GestureController } from '@ionic/angular';

@Directive({
  selector: '[long-press]'
})
export class NgxLongPressDirective implements AfterViewInit {
  @Input('presss-duration') public presssDuration = 2000;
  @Output() public didLongPress = new EventEmitter();

  public holdState: HoldState = HoldState.released;

  private gestureName = 'long-press';
  private get element(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    public gestureCtrl: GestureController
  ) { }

  ngAfterViewInit(): void {
    const gesture = this.gestureCtrl.create({
      el: this.element,
      gestureName: this.gestureName,
      threshold: 0,

      onStart: () => {
        console.log('onStart');
        this.holdState = HoldState.pressing;
        this.initTimer();
      },
      onEnd: () => {
        console.log('onEnd');
        this.holdState = HoldState.released;
      }
    });

    gesture.enable();
    this.element.onselectionchange = this.preventDefault;
    this.element.oncontextmenu = this.preventDefault;
    this.element.addEventListener('touchstart', this.preventDefault);

  }
  private initTimer() {
    setTimeout(() => {
      if (this.holdState === HoldState.pressing) {
        alert('long-press');
        this.didLongPress.emit();
      }
    }, 1500);
  }

  private preventDefault(e: Event) {
    e.preventDefault();
  };


}

enum HoldState {
  pressing,
  released
};

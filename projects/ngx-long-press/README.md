# ngx-long-press

## About

A `IONIC` gesture feature, for long press events

## Instalation

```bash
 npm i ngx-long-press --save
```

## Usage

> app.module.ts

```typescript
import { NgxLongPressModule } from 'ngx-long-press';

@NgModule({
  imports: [
    NgxLongPressModule
  ]
})
export class AppModule {}
```

add the directive `[long-press]` and the event callback `(didLongPress)` to the element you want to listen.

if you want a diferent duration for the press, pass the value as miliseconds on `[presss-duration]`, **default = 1500**

> app.component.html

```html
    <ion-toolbar>
        <ion-title size="large" [long-press] (didLongPress)="alertLongPress()">Blank</ion-title>
    </ion-toolbar>
```

> app.component.ts

```typescript
export class AppComponent {
  constructor() {}
  public alertLongPress(){
      console.log("user did long press for 1500 ms")
  }
}
```

## Properties

| Name                | Description                              | Type           | default        |
| ------------------- | ---------------------------------------- | -------------- | -------------- |
| `(didLongPress)`    | Emitted when a long-press is capturated. | ```()=>Void``` |                |
| `[presss-duration]` | Minimal duration for the press to count  | ```number```   | default = 1500 |

# ngx-show-hide-password

## About

A password hide/show feature for DOM input and ion-input

![Input Hidden](./doc/input-hidden.png "Input Hidden")

![Input Show](./doc/input-show.png "Input Show")

## Instalation

```bash
 npm i ngx-show-hide-passwd --save
```

## Usage

> app.module.ts

```typescript
import { NgxShowHidePasswordModule } from 'ngx-show-hide-password';

@NgModule({
  imports: [
    NgxShowHidePasswordModule
  ]
})
export class AppModule {}
```

> app.component.html

```html
 <ion-item>
    <ion-label position="stacked">Password</ion-label>
    <ngx-show-hide-password>
        <ion-input value="My password" type="password"></ion-input>
    </ngx-show-hide-password>
 </ion-item>
```

`OR`

> app.component.html

```html
 <ngx-show-hide-password>
     <input value="My password" type="password"/>
 </ngx-show-hide-password>
```

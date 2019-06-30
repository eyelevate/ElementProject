import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
const angular = require('../../angular.json');
const componentName = 'placeholder-name';

@NgModule({
  declarations: [
    // add base component
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    // add base component
  ],
  providers: []
})
export class AppModule {
  constructor(injector: Injector) {
    // const custom = createCustomElement( , {injector});
    // customElements.define($componentName, custom);
  }

  ngDoBootstrap() {

  }
}

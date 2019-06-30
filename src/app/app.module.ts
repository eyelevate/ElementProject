import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    AppComponent
  ],
  providers: []
})
export class AppModule {
  constructor(injector: Injector) {
    const custom = createCustomElement( AppComponent, {injector});
    customElements.define('element-project', custom);
  }

  ngDoBootstrap() {

  }
}

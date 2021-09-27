import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import {AlertModule} from "ngx-bootstrap/alert";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ArticleComponent
  ],
    imports: [
        AlertModule.forRoot(),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

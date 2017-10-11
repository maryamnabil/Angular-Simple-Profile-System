import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import {NewserviceService} from './table/newservice.service';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavbarComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    HttpModule
  ],
  providers: [NewserviceService],
  bootstrap: [AppComponent]

})
export class AppModule { }

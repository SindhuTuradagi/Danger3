import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { OutstandingAmtComponent } from './outstanding-amt/outstanding-amt.component';
import { TotalPmtComponent } from './total-pmt/total-pmt.component';
import { OutstandingTableComponent } from './outstanding-table/outstanding-table.component';
import { TotalTableComponent } from './total-table/total-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    TopNavbarComponent,
    OutstandingAmtComponent,
    TotalPmtComponent,
    OutstandingTableComponent,
    TotalTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DisplaycomponentComponent } from './displaycomponent/displaycomponent.component';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DisplayheaderComponent } from './displayheader/displayheader.component';
import { DisplayshippinginfoComponent } from './displayshippinginfo/displayshippinginfo.component';
import { DisplaypaymentsectionComponent } from './displaypaymentsection/displaypaymentsection.component';

const routes:Routes=[
  {path:'',component:DisplaycomponentComponent},
  {path:'header',component:DisplayheaderComponent},
  {path:'shipping',component:DisplayshippinginfoComponent},
  {path:'payments',component:DisplaypaymentsectionComponent}]

@NgModule({
  declarations: [
    AppComponent,
    DisplaycomponentComponent,
    DisplayheaderComponent,
    DisplayshippinginfoComponent,
    DisplaypaymentsectionComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),HttpModule,FormsModule,MDBBootstrapModule.forRoot()
  
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

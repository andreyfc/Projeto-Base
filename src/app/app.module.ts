import { ExampleRoutingModule } from './components/example/example-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ExampleModule } from './components/example/example.module';
import { NavBarComponent } from './theme/nav-bar/nav-bar.component';
import { FileUploadModule } from './components/file-upload/file-upload.module';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { SidenavComponent } from './theme/sidenav/sidenav.component';
import { CarregarComponent } from './theme/carregar/carregar.component';

import { FileSelectDirective } from 'ng2-file-upload';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FileUploadComponent,
    SidenavComponent,
    CarregarComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    ExampleRoutingModule,
    ExampleModule,
    FileUploadModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

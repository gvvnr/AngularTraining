import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { ReciveMessageComponent } from './recive-message/recive-message.component';
import { FormsModule } from '@angular/forms';
import {SendingMessageService} from "./send-message/sending-message.service";
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { DataComponent } from './data/data.component';
const appRoutes: Routes = [
  { path: 'hero/:id',      component:SendMessageComponent },
  { path: '**', component: PageNotFoundComponentComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    SendMessageComponent,
    ReciveMessageComponent,
    PageNotFoundComponentComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SendingMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

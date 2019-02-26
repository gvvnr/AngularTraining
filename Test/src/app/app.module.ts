import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotePadComponent } from './note-pad/note-pad.component'
import { DisplayComponent } from './display/display.component';
import { DataComponent } from './data/data.component';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';

const routes: Routes = [
  { path: 'notePad', component: NotePadComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    NotePadComponent,
    DisplayComponent,
    DataComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    FilterPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas :[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

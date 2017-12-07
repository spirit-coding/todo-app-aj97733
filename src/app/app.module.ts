import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { FormsModule } from '@angular/forms';
import { ServicesModule } from './services/services.module';

import { HttpClientModule } from '@angular/common/http';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateTodoComponent,
    TodoOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServicesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

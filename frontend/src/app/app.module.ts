import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task/task-list/task-list.component';
import { TaskEditComponent } from './components/task/task-edit/task-edit.component';
import { TaskDetailComponent } from './components/task/task-detail/task-detail.component';
import { TaskDeleteComponent } from './components/task/task-delete/task-delete.component';

import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Error404Component } from './components/errors/error404/error404.component'

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskEditComponent,
    TaskDetailComponent,
    TaskDeleteComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TodosContainerComponent } from './components/todos-container/todos-container.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import {RouterModule, Routes} from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
// const routes: Routes = [
RouterModule.forRoot([]);

const routes: Routes = [
    {path: '', component: TodosContainerComponent },
    {path: 'profile', component:  ProfileComponent},
  {path: 'user/:id', component: UserDetailsComponent },
  {path: '**', component: NotFoundComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    RegisterComponent,
    TodosContainerComponent,
    AddTodoComponent,
    TodoListComponent,
    ProfileComponent,
    UserDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

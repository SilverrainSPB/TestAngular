import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user.component';
import { NotFoundComponent } from './not-found.component';
import { LoginComponent } from './login.component'
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
    { path: 'user', component: UserComponent },
    { path: 'admin', component: AdminComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, UserComponent, AdminComponent, NotFoundComponent, LoginComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
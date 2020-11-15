import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';
import { UserPermissions } from './User';


@Component({
    selector: 'example-app',
    template: `<div>
                    <h1>Пример приложения</h1>
                    <login-cmp *ngIf="!isAutorised" (onAutorise)="onAutorise($event)"></login-cmp>
                    <router-outlet></router-outlet>
               </div>`,
    providers: [HttpService]
})

export class AppComponent { 
    private isAutorised: boolean = false;

    constructor(private router: Router) { }

    onAutorise(permission: UserPermissions) {
        switch (permission) {
            case UserPermissions.Admin:
                this.router.navigate(['/admin']);
                this.isAutorised = true;
                break;
            case UserPermissions.User:
                this.router.navigate(['/user']);
                this.isAutorised = true;
                break;
            default:
                this.router.navigate(['']);
                break;
        }
    }
}

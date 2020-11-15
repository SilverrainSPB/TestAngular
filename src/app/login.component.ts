import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { HttpService } from './http.service';
import { User, UserPermissions } from './User';

@Component({
    selector: 'login-cmp',
    template: `     <label>Введите логин:</label>
                    <input [(ngModel)]="name" placeholder="some login"/>
                    <br>
                    <label>Введите пароль:</label>
                    <input [(ngModel)]="password" placeholder="some password"/>
                    <br>
                    <button (click)="authorise()">Sign in</button>`,
    providers: [HttpService]
})
export class LoginComponent implements OnInit {
    name: string="";
    password: string="";


    private users: User[] = [];

    constructor(private httpService: HttpService) { }

    @Output() onAutorise = new EventEmitter<UserPermissions>();

    authorise() {


        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].Password == this.password) {
                let permissions = UserPermissions.Nopermission;
                permissions = <UserPermissions>this.users[i].Permissions;
                this.onAutorise.emit(permissions);
                console.log(permissions);
                break;
            }
        }
    }

    ngOnInit() {
        this.httpService.getData().subscribe(data => this.users = data["userList"]);
    }
}
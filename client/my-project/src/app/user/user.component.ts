import { Component, TemplateRef, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { UserService } from './user.service';
import { User } from './user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    users: User[] = [];
    newUser: User;
    modalRef: BsModalRef;

    constructor(
        private userService: UserService,
        private modalService: BsModalService)
    { }

    ngOnInit() {
        this.initNewUser();
        this.getUsers();
    }

    public getUsers() {
        this.userService
            .getUsers()
            .subscribe(
                (users) => {
                    this.users = users;
                }
            );
    }

    public openModal(addUser: TemplateRef<any>) {
        this.initNewUser();
        this.modalRef = this.modalService.show(addUser);
    }

    public initNewUser() {
        this.newUser = {firstname: null, lastname: null, email: null};
    }

    public onSubmit() {
        this.userService
            .addUser(this.newUser)
            .subscribe(
                (user) => {
                    this.getUsers();
                }
            );
    }
}

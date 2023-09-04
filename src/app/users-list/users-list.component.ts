import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Column } from '../models';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  users: any[] = [];
  userColumns: Column[] = [
    { header: 'ID', property: 'id' },
    { header: 'Username', property: 'username', type: 'text', editable: true },
    { header: 'Email', property: 'email', type: 'text', editable: true },
    { header: 'Name', property: 'name', type: 'text', editable: true },
    { header: 'Actions', property: 'actions', type: 'edit' },
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.apiService.getUsers().subscribe((data) => (this.users = data));
  }
}

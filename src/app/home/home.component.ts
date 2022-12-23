import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allUsers: any[] = [];
  searchKey: string = '';

  constructor(private api: ServiceService) {}
  ngOnInit(): void {
    this.getAllUsers();
  }

  //get all contacts
  getAllUsers() {
    this.api.getAllUsers().subscribe((data: any) => {
      this.allUsers = data.users;
    });
  }

  //search
  search(event: any) {
    this.searchKey = event.target.value;
  }
}

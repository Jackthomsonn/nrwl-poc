import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IUser } from '@test-poc/data';

@Component({
  selector: 'test-poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) {
    this.getUser();
  }

  public title: string;

  public getUser() {
    this.http.get('http://localhost:3333/api/users/1').subscribe((user: IUser) => {
      this.title = user.name;
    });
  }
}

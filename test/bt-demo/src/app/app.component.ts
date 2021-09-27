import { Component } from '@angular/core';
import {Account} from "./model/account";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bt-demo';

  accounts: Account[] = [];
  constructor() {
    this.accounts.push(new Account("son", "123"));
  }

  create(account: Account){
    this.accounts.push(account);
  }

  delete(index: number){
    this.accounts.splice(index, 1)
  }

  submitEdit(account: Account){
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].username === account.username){
        this.accounts[i] = account;
        return
      }
    }
  }
}

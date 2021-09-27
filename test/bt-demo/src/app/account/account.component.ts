import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Account} from "../model/account";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input()
  Accounts: Account[] = [];

  @Output() createAc = new EventEmitter();
  @Output() deleteAc = new EventEmitter();
  @Output() submitEditAc = new EventEmitter();

  accountFormGroup: FormGroup;

  constructor() {
    this.accountFormGroup = new FormGroup({
      username: new FormControl('', Validators.minLength(6)),
      password: new FormControl('', Validators.minLength(6)),
      status: new FormControl(true),
    })
  }

  ngOnInit(): void {
  }

  create() {
    this.createAc.emit(this.accountFormGroup.value);
  }

  delete(username: any) {
    for (let i = 0; i < this.Accounts.length; i++) {
      if (this.Accounts[i].username === username) {
        this.deleteAc.emit(i);
        return;
      }
    }
  }

  showEdit(username: any) {
    for (let i = 0; i < this.Accounts.length; i++) {
      if (this.Accounts[i].username === username) {
        this.accountFormGroup.get('username')?.setValue(this.Accounts[i].username);
        this.accountFormGroup.get('password')?.setValue(this.Accounts[i].password);
        return;
      }
    }
  }

  submitEdit() {
    this.submitEditAc.emit(this.accountFormGroup.value);
    return;
  }
}

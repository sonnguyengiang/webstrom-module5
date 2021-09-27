import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customers} from "../model/customers";
import {FormControl, FormControlName, FormGroup, Validators} from "@angular/forms";
import {variable} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerFormGroup: FormGroup;

  @Input()
  Customer: Customers[] = [];
  @Output() createCs = new EventEmitter();
  @Output() deleteCs = new EventEmitter();
  @Output() submitEdits = new EventEmitter;


  constructor() {
    this.customerFormGroup = new FormGroup({
      name: new FormControl('', Validators.minLength(6)),
      age: new FormControl(0,Validators.min(17)),
      address: new FormControl('',Validators.minLength(3)),
      gender: new FormControl('',Validators.minLength(3)),
      avatar: new FormControl('',Validators.required),
      status: new FormControl(true),

    })
  }

  ngOnInit(): void {
  }

  create() {
    this.createCs.emit(this.customerFormGroup.value);
    this.customerFormGroup.reset();
  }

  delete(name: any) {
    for (let i = 0; i < this.Customer.length; i++) {
      if (this.Customer[i].name === name) {
        this.deleteCs.emit(i);
        return;
      }
    }
  }

  showEit(name: any) {
    for (let i = 0; i < this.Customer.length; i++) {
      if (this.Customer[i].name === name) {
        this.customerFormGroup.get('name')?.setValue(this.Customer[i].name);
        this.customerFormGroup.get('age')?.setValue(this.Customer[i].age);
        this.customerFormGroup.get('address')?.setValue(this.Customer[i].address);
        this.customerFormGroup.get('gender')?.setValue(this.Customer[i].gender);
        this.customerFormGroup.get('avatar')?.setValue(this.Customer[i].avatar);
        return;
      }
    }
  }

  submitEdit() {
    this.submitEdits.emit(this.customerFormGroup.value);
    this.customerFormGroup.reset();
  }


}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormControlName, FormGroup} from "@angular/forms";

export class customer {
  name: string;
  age: number;
  address: string;
  status: boolean;


  constructor(name: string, age: number, address: string, status: boolean) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.status = status;
  }
}

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  customers: customer[] = [];
  name: string = "";
  age: number = 0;
  address: string = "";
  status: boolean = true;
  test = "";

  customerFormGroup: FormGroup;



  constructor() {

    this.customerFormGroup = new FormGroup({
      name: new FormControl("test"),
      age: new FormControl(),
      address: new FormControl(),
      status: new FormControl(),
    })

    this.customers.push(new customer("huy", 20, "hanoi", true));
    this.customers.push(new customer("minh", 20, "hanoi", false));
    this.customers.push(new customer("thanh", 20, "hanoi", true));
  }

  ngOnInit(): void {
  }

  create() {
    this.customers.push(new customer(this.name, this.age, this.address, this.status));
    this.name = "";
    this.age = 0;
    this.address = "";
  }

  delete(name: string) {
    this.customers = this.customers.filter(customer => {
      return customer.name !== name;
    })
  }

  edit(name: string) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].name == name) {
        this.customers[i] = new customer(this.name, this.age, this.address, this.status);
        this.name = "";
        this.age = 0;
        this.address = "";
        return;
      }
    }
  }

  showEdit(name: string) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].name == name) {
        this.name = this.customers[i].name;
        this.age = this.customers[i].age;
        this.address = this.customers[i].address;
        return;
      }
    }
  }

  customerName = null;

  customerTest(event:any) {
    this.customerName = event.target.value;
    this.test = event.target.value;
  }


}

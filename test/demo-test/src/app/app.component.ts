import {Component} from '@angular/core';
import {Customers} from "./model/customers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-test';
  customers: Customers[] = [];

  constructor() {
    this.customers.push(new Customers("bao", 19, "hanoi", "nam", "https://gamek.mediacdn.vn/133514250583805952/2020/7/22/riven-1595385507571654129353.jpg"));
    this.customers.push(new Customers("viet", 19, "hanoi", "nam", "https://image.thanhnien.vn/768/uploaded/vietthong/2021_07_21/tien-hac-am-phien-ban-11-15-01_gxwe.jpg"));
    this.customers.push(new Customers("son", 19, "hanoi", "nam", "https://store-images.s-microsoft.com/image/apps.28411.13510798887593857.411c7070-8254-4bc7-9822-93212e9b3eaa.d5650289-0ad1-4560-ac30-38a18a1847bb?mode=scale&q=90&h=200&w=200&background=%230078D7"));
  }

  create(customer: Customers) {
    this.customers.push(customer)
  }

  delete(index: number) {
    this.customers.splice(index, 1);
  }

  submitEdit(customer: Customers) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].name === customer.name) {
        this.customers[i] = customer;
        return;
      }
    }
  }
}

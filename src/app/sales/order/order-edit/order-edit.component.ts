import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../customer/customer.class';
import { CustomerService } from '../../customer/customer.service';
import { Order } from '../order.class';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  order!: Order;
  customers!: Customer[];

  constructor(
    private ordsvc: OrderService,
    private custsvc: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.ordsvc.edit(this.order).subscribe({
      next: (res) => {
        console.debug("Order changed");
        this.router.navigateByUrl("/order/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.ordsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Order:", res);
        this.order = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
    this.custsvc.list().subscribe({
      next: (res) => {
         console.debug("Customers:", res);
        this.customers = res;
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { IInvoice } from 'src/app/interfaces/IInvoice';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.scss'],
})
export class InvoicesPage implements OnInit {

  invoices: IInvoice[] = [
    {
      'id': 111222,
      'total': 25000
    },
    {
      'id': 1112223,
      'total': 158420
    },
    {
      'id': 111224,
      'total': 589745
    },
    {
      'id': 111222,
      'total': 15478569
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

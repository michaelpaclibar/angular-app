import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[];
  dataTableColumns: any[];

  constructor() {
  }

  ngOnInit() {
    this.quotes = [
      {quoteNumber: '123343.100000', clientCode: '856755', description: 'Quotation 1', status: 'Open'},
      {quoteNumber: '453534.100100', clientCode: '423422', description: 'Quotation 2', status: 'In Process'},
      {quoteNumber: '555324.100400', clientCode: '312123', description: 'Quotation 3', status: 'Denied'},
      {quoteNumber: '522342.102000', clientCode: '745444', description: 'Quotation 4', status: 'Completed'},
      {quoteNumber: '634323.105000', clientCode: '743522', description: 'Quotation 5', status: 'Completed'},
      {quoteNumber: '634223.100300', clientCode: '553334', description: 'Quotation 6', status: 'In Process'},
      {quoteNumber: '785544.105300', clientCode: '123111', description: 'Quotation 7', status: 'Open'},
      {quoteNumber: '965675.105600', clientCode: '223425', description: 'Quotation 8', status: 'Completed'},
      {quoteNumber: '954456.101600', clientCode: '745633', description: 'Quotation 9', status: 'Completed'},
      {quoteNumber: '324566.100050', clientCode: '634533', description: 'Quotation 10', status: 'Open'},
      {quoteNumber: '884545.100090', clientCode: '735744', description: 'Quotation 11', status: 'Denied'}
    ];

    this.dataTableColumns = [
      {field: 'quoteNumber', header: 'Quote No.'},
      {field: 'clientCode', header: 'Client Code'},
      {field: 'description', header: 'Description'},
      {field: 'status', header: 'Status'}
    ];
  }

}


export interface Quotes {
  quoteNumber;
  clientCode;
  description;
  status;
}

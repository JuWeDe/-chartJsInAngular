import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Papa } from 'ngx-papaparse';

interface Data {
  reason_group: string;
  count: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: any[] = [];
  constructor(private papa: Papa) { }

  ngOnInit(): void {
    this.readCSV();
  }
  readCSV() {
    this.papa.parse('/assets/name-count0506.csv', {
      header: true,
      complete: results => {
        this.data = results.data;
        console.log("results")
        console.log(results)
      }
    });
  }
}

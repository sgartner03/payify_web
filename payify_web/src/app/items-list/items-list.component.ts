import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../item';
import { ItemsDataService } from '../items-data.service';

import {MatTableModule} from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  items: Item[] = [];
  dataSource = new ItemsDataSource(this.itemsService)

  displayedColumns = ["name", "amount", "price"]

  constructor(private itemsService: ItemsDataService) {
    this.itemsService.getItems().subscribe(
      items => this.items = items
    );
  }

  ngOnInit(): void {
  }
}

export class ItemsDataSource extends DataSource<any> {
  constructor(private itemsService: ItemsDataService) {
    super();
  }
  connect(): Observable<Item[]> {
    return this.itemsService.getItems();
  }
  disconnect() {}
  
}

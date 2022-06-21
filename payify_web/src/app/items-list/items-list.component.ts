import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../item';
import { ItemsDataService } from '../items-data.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemsService: ItemsDataService) {
    this.itemsService.getItems().subscribe(
      items => this.items = items
    );
  }

  ngOnInit(): void {
  }

}

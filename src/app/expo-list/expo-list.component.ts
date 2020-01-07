import { Component, OnInit } from '@angular/core';
import { ExpoService } from '../repository/expo/expo.service';
import { Expo } from "../entity/expo";
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-expo-list',
  templateUrl: './expo-list.component.html',
  styleUrls: ['./expo-list.component.css']
})
export class ExpoListComponent implements OnInit {

  expos: Expo[];
  selectedExpo: Expo;
  pageSize = 10;
  //Mat Paginator Inputs
  lowValue: number = 0;
  highValue = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  //MatPaginator Output


  constructor(
    private repo: ExpoService,
  ) { }

  ngOnInit() {
    this.getServerData();
  }


  getServerData(event?: PageEvent) {
    this.repo.findAll()
      .subscribe(data => this.expos = data);
  }

  getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }
  
  
}

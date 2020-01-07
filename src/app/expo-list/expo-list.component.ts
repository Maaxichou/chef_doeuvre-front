import { Component, OnInit } from '@angular/core';
import { ExpoService } from '../repository/expo/expo.service';
import { Expo } from "../entity/expo/expo";
@Component({
  selector: 'app-expo-list',
  templateUrl: './expo-list.component.html',
  styleUrls: ['./expo-list.component.css']
})
export class ExpoListComponent implements OnInit {

  expos: Expo[];
  selectedExpo: Expo;
  constructor(
    private repo:ExpoService,
  ) { }

  ngOnInit() {
    this.repo.findAll()
    .subscribe(data => this.expos = data);
  }

}

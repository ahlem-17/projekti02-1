import { Component, OnInit } from '@angular/core';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { HostListener } from "@angular/core";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css',],
})
export class ListComponent implements OnInit {
  screenHeight: any;
  screenWidth: any;
  desktop = false;
  shownMap = false;
  shownList = true;
  faList = faList;
  faMap = faMap;
  list = [{name: 'LINNANMÄKI', location:'Tivollikuja 1', distance: 777},
  {name: 'KULTTUURITALO', location:'Sturenkatu 4', distance: 657},
  {name: 'TYÖVÄENASUNTOMUSEO', location:'Kirstinkuja 4', distance: 747},
  {name: 'LENININ PUISTO', location:'Vesilinnankatu', distance: 737},
  {name: 'CAFE BRAHE', location:'Läntinen Brahenkatu 6', distance: 767},
];
  constructor() { 
    this.getScreenSize();
    this.list.sort((a, b) => (a.distance > b.distance) ? 1 : -1)
  }

  showMap() {
    this.shownMap = true;
    this.shownList = false;
  }
  showList() {
    this.shownList = true;
    this.shownMap = false;
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        if (this.screenWidth > 600) {
          this.desktop = true;
          this.shownMap = false;
          this.shownList = true;
        } else {
          this.desktop = false;
        }
        
  }
  ngOnInit(): void {
  }

}

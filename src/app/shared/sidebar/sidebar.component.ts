import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
      li:hover{
        background-color: lightgrey;
      }
      li.active:hover{
        background-color: blue;
      }
    `
  ]
})
export class SidebarComponent {


}

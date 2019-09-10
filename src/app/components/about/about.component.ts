import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  header = 'O nas';
  title = 'O SmartGIS';
  content = 'To jest body podstrony o nas';

  constructor() { }

  ngOnInit() {
  }

}

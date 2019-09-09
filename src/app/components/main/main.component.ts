import {Component, Input, OnInit} from '@angular/core';
import {MyContent} from '../../interfaces/myContent';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input()
  content: MyContent;

  constructor() { }

  ngOnInit() {
  }

}

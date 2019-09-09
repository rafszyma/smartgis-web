import { Component } from '@angular/core';
import {Contact} from './classes/contact';
import {Home} from './classes/home';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smartgis-web';
  home = false;


  get currentContent(): any {
    if (this.home) {
      return new Home();
    }
    return new Contact();
  }
}

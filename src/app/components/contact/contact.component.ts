import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  header = 'Kontakt';
  title = 'Tutaj znajdziesz sposoby na kontakt';
  content = 'To jest moje body.';

  constructor() { }

  ngOnInit() {
  }

}

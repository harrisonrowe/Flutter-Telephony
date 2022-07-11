import { Component } from '@angular/core';
import { Contact } from '../models/contact/contact';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contacts: [Contact] = [new Contact("test-contact")];

  constructor() {
    // No-op
  }
}

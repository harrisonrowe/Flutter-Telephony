import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../../models/contact/contact';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss'],
})
export class ContactItemComponent implements OnInit {

  @Input() contact: Contact;

  constructor() { }

  ngOnInit() {}

}

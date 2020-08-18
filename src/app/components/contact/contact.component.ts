import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public regards: string;

  constructor() {
    this.regards =  `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Dolores porro, autem, delectus facere nam accusantium veritatis aspernatur
    facilis cum praesentium magni numquam quis ipsum nemo repellendus quam et mollitia
    voluptatum.`;
  }

  ngOnInit() {
  }

}

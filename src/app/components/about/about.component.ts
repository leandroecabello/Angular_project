import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public email: string;
  public imagenPersonal: string;
  public banner: string;

  constructor() {
    this.title = 'My name';
    this.subtitle = 'My Subtitle';
    this.email = 'My mail';
    this.imagenPersonal = ''; // url img/imagen_perfil
    this.banner = ''; // url imagen/icons
   }

  ngOnInit() {
    $(document).ready( () => {
      $('#logo').click( (e) => {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
      });
    });
  }
}

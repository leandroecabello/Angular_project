import { Component, OnInit } from '@angular/core';
/* import { $ } from 'protractor';*/
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proyecto-angular';

  ngOnInit() {
    $(document).ready( () => {
      $('.nav-menu').click( (e) => {
          e.preventDefault();
          $('.nav-menu').toggleClass('activated');
          $('ul').toggleClass('activated');
      });

      $('li').click( (e) => {
        e.preventDefault();
        $('ul').removeClass('activated');
        $('.nav-menu').removeClass('activated');
      });

      $('#logo').click( (e) => {
        e.preventDefault();
        $('ul').removeClass('activated');
        $('.nav-menu').removeClass('activated');
      });

    });
  }
}

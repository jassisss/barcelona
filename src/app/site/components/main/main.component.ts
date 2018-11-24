import {Component, OnInit} from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    $(document).ready(function () {

      (function () {

        $(`body`).scrollspy({
          target: `#navbar-menu`,
          offset: -30
        });

        $(`.nav-link`).click(function(event){

          event.preventDefault();

          let $meuPos = $(this.hash).offset().top;

          let $tam = $(`#navbar-menu`).innerHeight();

          console.log($meuPos + ' - ' + $tam);
          $(`html,body`).animate({scrollTop:$(this.hash).offset().top - $tam}, 1200);
        });

      })();


      $(`.up-top`).hide();
      $(`#navbar-menu`).css(`position` , `relative`);
      $(`#navbar-menu`).show(1000);
      $(`html, body`).animate({scrollTop: 0}, 800);

      $(window).scroll(function() {

        if($(this).scrollTop() > 1) {
          $(`.up-top`).fadeIn(1000);
          $(`#navbar-menu`).css(`position` , `fixed`);
          $(`#navbar-menu`).show(1000);
        }else{
          $(`.up-top`).fadeOut(1000);
          $(`#navbar-menu`).css(`position` , `relative`);
        }

      });

      $(`.up-top`).on(`click`, function (e) {
        e.preventDefault();
        $(`html, body`).animate({scrollTop: 0}, 800);
        $(`.up-top`).fadeOut(500).stop();
      });


    });
  }
}

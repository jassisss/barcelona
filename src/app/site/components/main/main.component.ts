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

        let $offisetHeight = $(`#navbar-menu`).innerHeight();

        $(`.scroll-container `).offset({top:$offisetHeight, left:`0`});

        $(`body`).scrollspy({
          target: `#navbar-menu`,
          offset: $offisetHeight
        });

        $(window).resize(function () {

          $offisetHeight = $(`#navbar-menu`).innerHeight();

          $(`.scroll-container `).offset({top:$offisetHeight, left:`0`})

          $(`body`).scrollspy({
            target: `#navbar-menu`,
            offset: $offisetHeight
          });

        })

        $(`.nav-link`).click(function(event) {
          event.preventDefault();
          $(`html,body`).animate({scrollTop: $(this.hash).offset().top - $offisetHeight}, 1200);
        });

      })();


      $(`.up-top`).hide();

      $(window).scroll(function() {

        if($(this).scrollTop() > 131) {
          $(`.up-top`).fadeIn(1000);
        }else{
          $(`.up-top`).fadeOut(1000);
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

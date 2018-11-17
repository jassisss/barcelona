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

        let idnav = $("#navbar-menu li.active a").attr("href");
        idnav.parent().removeClass('active');

        $("body").scrollspy({
          target: "#navbar-menu",
          offset: 101
        });

        $(".nav-item").on("activate.bs.scrollspy", function () {
          $("section span").css("opacity", 0);
          alert('ggggg');
          const id = $("#navbar-menu li.active a").attr("href");
          const elemento = $(id).find("span");

          elemento.animate({opacity: 1}, 800);;

        });

        $(".nav-link").click(function(event){
          event.preventDefault();
          $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1200);
        });

      })();


      if ($(this) > 200) {
        $("#back_top").fadeIn("slow");
      } else {
        $("#back_top").fadeOut("slow");
      }


      $("#back_top").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: 0}, 800);
        $("#back_top").fadeOut('slow').stop();
      });

    });
  }
}

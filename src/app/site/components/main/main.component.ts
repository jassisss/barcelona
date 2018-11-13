import { Component, OnInit } from '@angular/core';

declare let $ : any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // BACK TO TOP BUTTON ///////////////////////////////////////////////////////////////////////////////////////////////////////
    $(document).ready(function(){
      $(window).on('scroll', function(){
        if ( $(this).scrollTop() > 200 ) {
          $('#back_top').fadeIn("slow");
        }
        else {
          $('#back_top').fadeOut("slow");
        }
      });

      $('#back_top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate( {scrollTop : 0}, 800 );
        $('#back_top').fadeOut("slow").stop();
      });

    });

  }

}

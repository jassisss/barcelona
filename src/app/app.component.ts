import {Component, OnInit} from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Barcelona';

  ngOnInit() {
    $(function () {
      $('#sortable').sortable().disableSelection();
      $('#btn1').click(function() {
        $('#hide').toggle('hide');
      });
    });
  }
}

import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-liveplayer-demo';

  option1 = {
    'source': 'rtmp://rtmp.open.ys7.com/openlive/5817335c030a44faadb5f5c2ce5e9b05',
    'width': '100%',
    'height': '150px',
    'autoplay': true,
    'isLive': true,
    'rePlay': false,
    'playsinline': false,
    'preload': true,
    'controlBarVisibility': 'hover',
    'useH5Prism': true,
    'skinLayout': [
      {
        'name': 'controlBar',
        'align': 'blabs',
        'x': 0,
        'y': 0,
        'children': []
      }
  };
}

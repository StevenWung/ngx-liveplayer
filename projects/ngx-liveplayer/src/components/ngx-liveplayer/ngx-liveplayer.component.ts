import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {AliPlayerClass} from '../../types/class/index';

declare const Aliplayer: AliPlayerClass;

@Component({
  selector: 'ngx-liveplayer',
  templateUrl: './ngx-liveplayer.component.html',
  styleUrls: ['./ngx-liveplayer.component.scss']
})
export class NgxLiveplayerComponent implements OnInit {

  @Input()
  options;

  player: AliPlayerClass;

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    const id = 'id_' + Math.floor(Math.random() * 10000);
    const container = this.el.nativeElement.querySelector('div.player-container');
    container.setAttribute('id', id);
    /*
    new Aliplayer({
        'id': id,
        'source': 'rtmp://rtmp.open.ys7.com/openlive/5817335c030a44faadb5f5c2ce5e9b05',
        'width': '100%',
        'height': '500px',
        'autoplay': true,
        'isLive': false,
        'rePlay': false,
        'playsinline': true,
        'preload': true,
        'controlBarVisibility': 'hover',
        'useH5Prism': true
      }, function (player) {
        console.log('播放器创建了。');
      }
    );
    */
    this.options = this.options || {};
    this.options.id = id;
    this.player = new Aliplayer(this.options, () => {
      console.log('播放器创建了。');
    });
  }

}

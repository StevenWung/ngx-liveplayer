import {Injectable} from '@angular/core';

@Injectable
export class NgxLoaderService {

  loadScript() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = '//g.alicdn.com/de/prismplayer/2.7.2/aliplayer-min.js';
  }
}

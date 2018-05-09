import { Component } from '@angular/core';
import { IVideo } from '../types';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {

  videoId: Observable<string>;

  constructor(route: ActivatedRoute) {
    this.videoId = route.params.pipe(
      pluck<{}, string>('videoId')
    );
  }


}

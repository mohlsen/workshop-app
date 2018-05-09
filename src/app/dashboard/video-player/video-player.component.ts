import { Component } from '@angular/core';
import { IVideo } from '../types';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { pluck, switchMap, share } from 'rxjs/operators';
// import { VideoDashboardComponent } from '../video-dashboard/video-dashboard.component';
import { VideoDataService } from '../../video-data.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {

  video: Observable<IVideo>;

  constructor(route: ActivatedRoute, videoDataService: VideoDataService) {
    this.video = route.params.pipe(
      pluck<{}, string>('videoId'),
      switchMap(id => videoDataService.loadVideo(id)),
      share()
    );
  }


}

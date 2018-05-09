import { Component} from '@angular/core';

import { IVideo } from '../types';
import { VideoDataService } from '../../video-data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {

  videoData: Observable<IVideo[]>;

  constructor(videoDataService: VideoDataService) {
    this.videoData = videoDataService.loadVideos().pipe(
      map(videos => {
        return videos.map(video => {
          video.title = video.title + ' IS COOL!';
          return video;
        });
      })
    );
  }

}

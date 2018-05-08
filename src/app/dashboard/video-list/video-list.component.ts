import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import { IVideo } from '../types';
import { VideoDataService } from '../../video-data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videoData: Observable<IVideo[]>;
  selectedVideo: IVideo | undefined;
  @Output() videoSelected = new EventEmitter<IVideo>();

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

  ngOnInit() {
  }

  onSelectVideo = (video: IVideo) => {
    this.selectedVideo = video;
    this.videoSelected.emit(video);
  }

}

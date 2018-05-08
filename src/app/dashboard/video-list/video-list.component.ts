import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import { IVideo } from '../types';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videoData: IVideo[];
  selectedVideo: IVideo | undefined;
  @Output() videoSelected = new EventEmitter<IVideo>();

  constructor(http: HttpClient) {
    http
        .get('https://api.angularbootcamp.com/videos')
        .subscribe((data: IVideo[]) => {
            this.videoData = data;
        });

  }

  ngOnInit() {
  }

  onSelectVideo = (video: IVideo) => {
    this.selectedVideo = video;
    this.videoSelected.emit(video);
  }

}

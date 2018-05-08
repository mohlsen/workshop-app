import { Injectable } from '@angular/core';
import { IVideo } from './dashboard/types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {

  constructor(private http: HttpClient) { }

  loadVideos() {
    return this.http.get<IVideo[]>('https://api.angularbootcamp.com/videos');
  }
}

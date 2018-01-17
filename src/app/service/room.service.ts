import { Injectable } from '@angular/core';
import {Room} from '../model/room';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ApiSettings} from '../api.settings';

@Injectable()
export class RoomService {

  private API_ENDPOINT = ApiSettings.ROOM_SERVICE_ENDPOINT;

  constructor(private http: HttpClient) { }

  list(): Observable<Room[]> {
    return this.http.get<Room[]>(this.API_ENDPOINT+'/rooms/');
  }

}

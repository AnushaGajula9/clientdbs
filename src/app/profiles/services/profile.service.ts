import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  api = '/api/profile';

  constructor(private http: HttpClient) {}
  getprofile(): Observable<any> {
    return this.http.get(this.api);
  }
  createProfile(profile: any): Observable<any> {
    return this.http.post(this.api, profile);
  }
  createExperience(experience: any): Observable<any> {
    return this.http.post(this.api + '/experience', experience);
  }
  deleteExep(expId: string): Observable<any> {
    return this.http.delete(this.api + '/experience/' + expId);
  }
}

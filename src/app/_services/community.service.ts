import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Member } from '../_models/member';
import { Post } from '../_models/post';
import { User } from '../_models/user';
import { AccountService } from './account.service';

const httpOptions={
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token
  })
}

@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  baseUrl = 'https://localhost:5001/api/';
  user: User;

  constructor(private http: HttpClient, private accountService: AccountService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => {
      this.user = user;
   });
  }

  getMembers(){
    return this.http.get<Member>(this.baseUrl + 'users', httpOptions);
  }

  getMember(username: string){
    return this.http.get<Member>(this.baseUrl + 'users/' + username, httpOptions);
  }

  }


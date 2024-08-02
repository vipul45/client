import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../_models/post';

const httpOptions={
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl = 'https://localhost:5001/api/';
  post: Post[];

  constructor(private http: HttpClient) { }
  // All the posts
  getPosts() {
    return this.http.get<Post>(this.baseUrl + 'posts', httpOptions);
  }
  
  // Get post by specific id
  getPostById(id: any) {
    return this.http.get<Post>(this.baseUrl + 'posts/' + id, httpOptions);
  }

  // Add post
  addPost(data : any){
    return this.http.post<Post>(this.baseUrl + 'posts/add-post', data, httpOptions);
  }

  deletePost(postId: number){
    return this.http.delete(this.baseUrl + 'posts/delete-post/' + postId, httpOptions);
  }
}


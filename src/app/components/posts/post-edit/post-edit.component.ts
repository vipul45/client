import { Component, Input, OnInit } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Member } from 'src/app/_models/member';
import { Post } from 'src/app/_models/post';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { CommunityService } from 'src/app/_services/community.service';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  member: Member;
  user: User;
  posts: Post[];
  

  constructor(private accountService: AccountService ,private postService: PostService, private communityService: CommunityService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user =>this.user = user);
   }

  ngOnInit(): void {
    this.loadUserPosts();
  }

  loadUserPosts(){
   this.communityService.getMember(this.user.username).subscribe(response => {
      this.member = response;
      this.posts = this.member.posts;
   });
  }

  deletePost(postId: number){
    this.postService.deletePost(postId).subscribe(() => {
      this.posts = this.member.posts.filter(x => x.id !== postId);
    });
  }

}

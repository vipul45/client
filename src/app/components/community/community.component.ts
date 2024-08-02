import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { CommunityService } from 'src/app/_services/community.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  member: Member;

  constructor(private communityService: CommunityService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    this.communityService.getMembers().subscribe(res => {
      this.member = res;
    })
  }


}

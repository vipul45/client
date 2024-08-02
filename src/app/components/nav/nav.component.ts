import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  data: any = {}

  constructor(public accountService: AccountService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  login(){
    this.accountService.login(this.data).subscribe(respose => {
      this.router.navigateByUrl('/posts');
    }, error => {
      console.log(error);
      this.toastrService.error(error.error);
    })
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

}

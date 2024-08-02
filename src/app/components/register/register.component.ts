import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  data: any = {};

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register()
  {
    this.accountService.register(this.data).subscribe(res => {
      this.data = res;
      console.log(res);
      this.cancel();
    }, error => {
      this.toastr.error(error.error);
    })
  }

  cancel()
  {
    this.cancelRegister.emit(false);
  }

}

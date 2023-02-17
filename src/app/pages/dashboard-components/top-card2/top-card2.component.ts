
import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-top-card2',
  templateUrl: './top-card2.component.html',
  styleUrls: ['./top-card2.component.scss'],
})
export class TopCard2Component {
  public currentUser: any;
  constructor(public accountService:AccountService) {
  this.currentUser = this.accountService.userValue;
  }
}

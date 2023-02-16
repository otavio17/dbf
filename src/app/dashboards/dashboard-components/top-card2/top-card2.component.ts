import { AccountService } from './../../../services/account.service';
import { Component } from '@angular/core';

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

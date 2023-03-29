
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from 'src/app/services/account.service';
import { MenuItems } from 'src/app/shared/menu-items/menu-items';

@Component({
  selector: 'app-top-card2',
  templateUrl: './top-card2.component.html',
  styleUrls: ['./top-card2.component.scss'],
})


export class TopCard2Component {
  public currentUser: any;
  public user_lever="User Lever";

  constructor(public translate: TranslateService,public accountService:AccountService, public menuItems: MenuItems) {
    this.currentUser = this.accountService.userValue;
  }
}

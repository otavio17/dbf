import { Routes } from '@angular/router';

import { MatIconComponent } from './material-icons/mat-icon.component';
import { HistoryComponent } from './history/history.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { UserListComponent } from './user-list/user-list.component';

import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'icons/material',
        component: MatIconComponent,
        data: {
          title: 'Material Icons',
          urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Material Icons' }],
        },
      },
    
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'home'
        },
      },
      {
        path: 'transaction',
        component: TransactionComponent,
        data: {
          title: 'Transaction',
        },
      },
      {
        path: 'history',
        component: HistoryComponent,
        data: {
          title: 'History',
        },
      },
      {
        path: 'sormettings',
        component: SettingsComponent,
        data: {
          title: 'Settings',
        },
      }
      ,
      {
        path: 'transaction-list',
        component: TransactionListComponent,
        data: {
          title: 'Transaction List',
        },
      }
    ],
  },
];

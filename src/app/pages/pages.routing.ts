import { RegisterCompaniesListComponent } from './company/register-companies-list/register-companies-list.component';
import { Routes } from '@angular/router';

import { MatIconComponent } from './material-icons/mat-icon.component';
import { HistoryComponent } from './history/history.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { UserListComponent } from './user-list/user-list.component';

import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { TransactionReceivedListComponent } from './company/transaction-received-list/transaction-received-list.component';

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
          title: 'Home'
        },
      },
      {
        path: 'transaction',
        component: TransactionComponent,
        data: {
          title: 'Make New Transaction',
        },
      },
      {
        path: 'history',
        component: HistoryComponent,
        data: {
          title: 'Transaction History',
        },
      },
      {
        path: 'settings',
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
      },
      {
        path: 'company/transaction-received-list',
        component: TransactionReceivedListComponent,
        data: {
          title: 'Transaction Received List',
        },
      },
      {
        path: 'company/register-companies-list',
        component: RegisterCompaniesListComponent,
        data: {
          title: 'My Companies Listing',
        },
      },
      {
        path: 'user-list',
        component:UserListComponent,
        data: {
          title: 'User List',
        },
      }
    ],
  },
];

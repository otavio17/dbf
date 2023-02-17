import { MessageComponent } from './dashboard-components/message/message.component';
import { CommentsComponent } from './dashboard-components/comments/comments.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PagesRoutes } from './pages.routing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatListModule } from '@angular/material/list';
import { MatIconComponent } from './material-icons/mat-icon.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { HistoricComponent } from './historic/historic.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ActivityComponent, ContactListComponent, DeveloperInfoComponent, IncomeExpenssComponent, NewsletterComponent, PostsComponent, SalesOverviewComponent, SalesPurchaseComponent, SalesYearlyComponent, TopCard2Component, TopCardComponent, Visitor2Component, VisitorComponent } from './dashboard-components';
import { DashboardEmpComponent } from './dashboard-components/dashboard-emp/dashboard-emp.component';
import { EmpDialogComponent } from './dashboard-components/dashboard-emp/emp-dialog/emp-dialog.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    DemoMaterialModule,
    FlexLayoutModule,
    FormsModule,
    MatListModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    ChartistModule,
    ChartsModule,
    NgApexchartsModule,
  ],
  declarations: [
    MatIconComponent,
    SettingsComponent,
    HomeComponent,
    HistoricComponent,
    TransactionListComponent,
    UserListComponent,
    TransactionComponent,
    ProfileComponent,
    TopCardComponent,
    SalesOverviewComponent,
    VisitorComponent,
    Visitor2Component,
    IncomeExpenssComponent,
    PostsComponent,
    NewsletterComponent,
    DeveloperInfoComponent,
    ActivityComponent,
    TopCard2Component,
    SalesPurchaseComponent,
    SalesYearlyComponent,
    ContactListComponent,
    CommentsComponent,
    MessageComponent,
    DashboardEmpComponent,
    EmpDialogComponent,
  ],
})
export class PagesModule {}

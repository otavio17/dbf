import { VisitorUserComponent } from './dashboard-components/visitor-user/visitor-user.component';
import { SalesPurchaseUserComponent } from './dashboard-components/sales-purchase-user/sales-purchase-user.component';
import { HomeCompanyComponent } from './dashboard-components/home-company/home-company.component';
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
import { HistoryComponent } from './history/history.component';
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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { QuillModule } from 'ngx-quill';
import { TransactionReceivedListComponent } from './company/transaction-received-list/transaction-received-list.component';
import { RegisterCompaniesListComponent } from './company/register-companies-list/register-companies-list.component';
import { HomeAdmComponent } from './dashboard-components/home-adm/home-adm.component';
import { HomeUserComponent } from './dashboard-components/home-user/home-user.component';
import { CreateCompanyComponent } from './company/register-companies-list/create-company/create-company.component';
import { CreditCardDepositComponent } from './credit-card-deposit/credit-card-deposit.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient): any {
  return new TranslateHttpLoader(http, '.../assets/i18n/', '.json');
}


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
    QuillModule.forRoot(),
    MatDatepickerModule,
    NgMultiSelectDropDownModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [
    MatIconComponent,
    SettingsComponent,
    HomeComponent,
    CreditCardDepositComponent,
    HistoryComponent,
    TransactionListComponent,
    UserListComponent,
    TransactionComponent,
    TransactionListComponent,
    TopCardComponent,
    TransactionReceivedListComponent,
    RegisterCompaniesListComponent,
    SalesOverviewComponent,
    CreateCompanyComponent,
    VisitorComponent,
    Visitor2Component,
    VisitorUserComponent,
    IncomeExpenssComponent,
    PostsComponent,
    NewsletterComponent,
    DeveloperInfoComponent,
    ActivityComponent,
    TopCard2Component,
    SalesPurchaseComponent,
    SalesPurchaseUserComponent,
    SalesYearlyComponent,
    HomeCompanyComponent,
    HomeAdmComponent,
    HomeUserComponent,
    ContactListComponent,
    CommentsComponent,
    MessageComponent,
    DashboardEmpComponent,
    EmpDialogComponent,
    RegisterCompaniesListComponent,
    RegisterCompaniesListComponent,
  ],
  providers: [
    TranslateService,
  ],
})
export class PagesModule {}

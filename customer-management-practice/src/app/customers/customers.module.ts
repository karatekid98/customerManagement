
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { CustomersComponent } from './customers.component';
import { CustomerService } from '../customer.service';
import { CustomerDetailsComponent } from './customer-card-view/customer-details/customer-details.component';
import { CustomerCardViewComponent } from './customer-card-view/customer-card-view.component';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { Translate } from '../translate.service';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    ToolbarComponent,
    CustomerCardViewComponent,

  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    CustomersComponent
  ],
  providers: [CustomerService, Translate]
})
export class CustomersModule { }

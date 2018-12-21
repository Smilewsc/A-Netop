import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {NgxEchartsModule} from 'ngx-echarts'
import { IndexComponent} from './page/index/index.component';
import { HomeComponent } from './page/home/home.component';
import { ViewComponent } from './page/view/view.component'
import { BasicComponent } from './page/basic/basic.component';
import { BusinessComponent } from './page/business/business.component';
import { ApComponent } from './page/AP/ap.component';
import { RepairComponent } from './page/call-repair/call-repair.component';
import { CardsComponent } from './page/cards/cards.component';
import { EquipmentComponent } from './page/equipment/equipment.component';
import { InventoryComponent } from './page/inventory/inventory.component';
import { MaintenanceComponent } from './page/maintenance/maintenance.component';
import { ReportComponent } from './page/report/report.cpmponent';
import { SiteComponent } from './page/site/site.component';
import { OrderComponent } from './page/work-order/work-order.component';
import { BackstageComponent } from './page/backstage/backstage.component';
import { BasicdataComponent } from './page/basic-data/basic-data.component';
import { SystemComponent } from './page/system/system.component';
import { AlarmComponent } from './page/alarm/alarm.component';
import { AbouchementComponent } from './page/abouchement/abouchement.component';
import { ParameterComponent } from './page/parameter/parameter.component';
import { PublishComponent } from './page/publish/publish.component';
import { EquipmentManagerComponent } from './page/equipment/equipment-manager/equipment-manager.component';
import { BscComponent } from './page/bsc/bsc.component';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService
} from '@ngx-translate/core';
import { Http } from '@angular/http';


export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    ViewComponent,
    BasicComponent,
    ApComponent,
    BusinessComponent,
    RepairComponent,
    CardsComponent,
    EquipmentComponent,
    InventoryComponent,
    MaintenanceComponent,
    ReportComponent,
    SiteComponent,
    OrderComponent,
    ViewComponent,
    BasicComponent,
    BackstageComponent,
    BasicdataComponent,
    SystemComponent,
    AlarmComponent,
    AbouchementComponent,
    ParameterComponent,
    PublishComponent,
    EquipmentManagerComponent,
    BscComponent
   
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
    })
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }

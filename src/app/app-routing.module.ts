import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent} from './page/index/index.component';
import { HomeComponent } from './page/home/home.component'
import { ViewComponent } from './page/view/view.component';
import { BasicComponent} from './page/basic/basic.component';
import { ApComponent } from './page/AP/ap.component';
import { BusinessComponent } from './page/business/business.component';
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
import { BscComponent} from './page/bsc/bsc.component'
const routes: Routes = [
  {path:"",component:BasicComponent},
  {path:'bsc',component:BscComponent,
    children:[
      {path:'equipment-manager',component:EquipmentManagerComponent}
    ]},
  {path:"basic",component:BasicComponent,
    children:[
      {path:"index",component:IndexComponent},
      {path:"home",component:HomeComponent},
      {path:'view',component:ViewComponent},
      {path:'ap',component:ApComponent},
      {path:'business',component:BusinessComponent},
      {path:'repair',component:RepairComponent},
      {path:'cards',component:CardsComponent},
      {path:'equipment',component:EquipmentComponent},    
      {path:'inventory',component:InventoryComponent},
      {path:'maintenance',component:MaintenanceComponent},
      {path:'report',component:ReportComponent},
      {path:'site',component:SiteComponent},
      {path:'order',component:OrderComponent},
    ]}, 
  {path:'backstage',component:BackstageComponent,
    children:[
      {path:'basicdata',component:BasicdataComponent},
      {path:"system",component:SystemComponent},
      {path:'alarm',component:AlarmComponent},
      {path:'abouchement',component:AbouchementComponent},
      {path:'parameter',component:ParameterComponent},
      {path:'publish',component:PublishComponent}
    ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  BulkJeansComponent,
  DenimManufacturersComponent,
  JeanManufacturersComponent,
  JeansManufacturersComponent,
  JeansManufacturingCostComponent,
  JeansPantsManufacturersComponent,
  JeansWholesaleComponent,
  KevlarJeansManufacturersComponent,
  WholesaleDenimJeansSuppliersComponent,
  WholesaleJeansManufacturersComponent,
  WholesaleJeansBulkComponent,
  WholesaleWomenJeansComponent
} from './components';

const routes: Routes = [
  { path: 'bulk-jeans', component: BulkJeansComponent },
  { path: 'denim-manufacturers', component: DenimManufacturersComponent },
  { path: 'jean-manufacturers', component: JeanManufacturersComponent },
  { path: 'jeans-manufacturers', component: JeansManufacturersComponent },
  { path: 'jeans-manufacturing-cost', component: JeansManufacturingCostComponent },
  { path: 'jeans-pants-manufacturers', component: JeansPantsManufacturersComponent },
  { path: 'jeans-wholesale', component: JeansWholesaleComponent },
  { path: 'kevlar-jeans-manufacturers', component: KevlarJeansManufacturersComponent },
  { path: 'wholesale-denim-jeans-suppliers', component: WholesaleDenimJeansSuppliersComponent },
  { path: 'wholesale-jeans-manufacturers', component: WholesaleJeansManufacturersComponent },
  { path: 'wholesale-jeans-bulk', component: WholesaleJeansBulkComponent },
  { path: 'wholesale-women-jeans', component: WholesaleWomenJeansComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class PostsRoutingModule {}

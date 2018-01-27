import {NgModule} from '@angular/core';

import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';

let modules = [
  ToolbarModule,
  ButtonModule,
  SplitButtonModule,
  TabMenuModule,
  TableModule,
  CardModule
];

@NgModule({
  imports: modules,
  exports: modules,
  declarations: []
})
export class NgprimeModule {
}

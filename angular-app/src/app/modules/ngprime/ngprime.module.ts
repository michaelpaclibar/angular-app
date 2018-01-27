import {NgModule} from '@angular/core';

import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';

let modules = [
  ToolbarModule,
  ButtonModule,
  SplitButtonModule,
  TabMenuModule,
  TableModule
];

@NgModule({
  imports: modules,
  exports: modules,
  declarations: []
})
export class NgprimeModule {
}

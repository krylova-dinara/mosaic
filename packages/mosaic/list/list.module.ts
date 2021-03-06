import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { McLineModule, McOptionModule, McPseudoCheckboxModule } from '@ptsecurity/mosaic/core';

import { McListSelection, McListOption } from './list-selection.component';
import { McList, McListItem } from './list.component';


@NgModule({
    imports: [
        CommonModule,
        A11yModule,
        McPseudoCheckboxModule,
        McLineModule,
        McOptionModule
    ],
    exports: [
        McList,
        McListSelection,
        McListItem,
        McListOption,
        McOptionModule
    ],
    declarations: [
        McList,
        McListSelection,
        McListItem,
        McListOption
    ]
})
export class McListModule {}

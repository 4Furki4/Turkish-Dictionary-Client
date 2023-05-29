import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefinitionComponent } from './definition.component';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [
    DefinitionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DefinitionComponent }
    ]),
    NgxSpinnerModule
  ]
})
export class DefinitionModule { }

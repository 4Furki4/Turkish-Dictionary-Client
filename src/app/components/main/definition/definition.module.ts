import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefinitionComponent } from './definition.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DefinitionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DefinitionComponent }
    ])
  ]
})
export class DefinitionModule { }

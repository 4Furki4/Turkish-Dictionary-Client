import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: MainComponent, children: [
        { path: ':word', loadChildren: () => import('./definition/definition.module').then(m => m.DefinitionModule) }
      ]
    }])
  ]
})
export class MainModule { }

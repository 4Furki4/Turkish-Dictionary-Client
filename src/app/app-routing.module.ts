import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./components/main/main.module').then(m => m.MainModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

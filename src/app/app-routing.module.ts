import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetFormsComponent } from './widget-forms/widget-forms.component';

const routes: Routes = [
  { path: 'widget', component: WidgetFormsComponent },

  { path: '', redirectTo: '/widget', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

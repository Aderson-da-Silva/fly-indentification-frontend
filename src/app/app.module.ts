import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/components/home/home.module';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    AppComponent,
    HomeModule
  ],
  exports: [RouterModule]
})
export class AppModule { }
